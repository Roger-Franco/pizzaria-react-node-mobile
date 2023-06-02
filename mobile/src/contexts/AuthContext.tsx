import { ReactNode, createContext, useState } from 'react';

type AuthContextData = {
  user: Userprops;
  isAuthenticated: boolean
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

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState({
    id: '12',
    name: 'roger',
    email: 'roger@roger.com',
    token: '123456',
  })

  const isAuthenticated = !!user.name

  return(
    <AuthContext.Provider value={{user, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}