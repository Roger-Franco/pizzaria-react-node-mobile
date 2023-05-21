import { api } from '@/services/apiClient';
import Router from 'next/router';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import {createContext, ReactNode, useState} from 'react'

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>
  signOut: () => void
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode
}


export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
  try {
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/')
  } catch (error) {
    console.log('erro ao deslogar');
    
  }
}

export function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user // converte para uma variável boliana. Se tiver usuário é true, caso contrário false

  async function signIn({email, password}: SignInProps){
    try {
      const response = await api.post('session',{
        email,
        password
      })
      console.log(response);
      const {id, name, token} = response.data
      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expira em um mes
        path: '/' // Quais caminhos terão acesso ao cookie. No caso aqui todos.
      })

      setUser({id, name, email})

      // Passar para as próximas requisições o nosso token
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      // Redirecionar o user para a página dashboard
      Router.push('/dashboard')
      
    } catch (error) {
      console.log('erro ao acessar', error);
      
    }
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}