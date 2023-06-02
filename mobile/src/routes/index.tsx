

import React, { useContext } from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { ActivityIndicator, View } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'

function Routes() {
  const {isAuthenticated} = useContext(AuthContext)
  const loading = false

  if(loading){
    return (
      <View style={{flex: 1, backgroundColor: '#1d1d2e', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={60} color='#f5f7fb' />
      </View>
    )
  }

  return (
    isAuthenticated ? <AppRoutes /> : < AuthRoutes />
  )
}

export default Routes