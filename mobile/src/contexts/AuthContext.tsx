import { ReactNode, createContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '../services/api'

type AuthContextData = {
  user: Userprops;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
}

type Userprops = {
  id: string;
  name: string;
  email: string;
  token: string;
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string;
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    token: '',
  })
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const isAuthenticated = !!user.name

  useEffect(() => {
    async function getUser(){
      // Pegar os dados d=savos do user
      const userInfo = await AsyncStorage.getItem('@pizzaThuthu')
      let hasUser: Userprops = JSON.parse(userInfo || '{}')

      // verificar se recebemos as informações dele.
      if(Object.keys(hasUser).length > 0){
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.id,
          token: hasUser.token
        })
      }
      setLoading(false)
    }
    getUser()
  }, [])

  async function signIn({email, password}: SignInProps) {
    // console.log(email);
    // console.log(password);
    setLoadingAuth(true)

    try {
      const response = await api.post('/session', {
        email,
        password
      })
      // console.log(response.data);
      const {id, name, token} =  response.data

      const data = {
        ...response.data
      }

      await AsyncStorage.setItem('@pizzaThuthu', JSON.stringify(data))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser({id, name, email, token})
      
    } catch (error) {
      console.log('erro ao acessar ', error);
      setLoadingAuth(false)
      
    }
    
  }

  return(
    <AuthContext.Provider value={{user, isAuthenticated, signIn, loadingAuth, loading}}>
      {children}
    </AuthContext.Provider>
  )
}