import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signIn, loadingAuth} = useContext(AuthContext)

  async function handleLogin(){
    if(email === '' || password === ''){
      return
    }
    // console.log('TESTE' + email + password)
    await signIn({email, password})

  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      {/* <Text>{user.name}</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Digite seu email...'
        style={styles.input}
        placeholderTextColor='#f0f0f0'
        value={email}
        onChangeText={setEmail}
        // onChangeText={(text) => setEmail(text)}
        />
        <TextInput
        placeholder='Digite sua senha...'
        style={styles.input}
        placeholderTextColor='#f0f0f0'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        // onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          { loadingAuth ? (
            <ActivityIndicator size={25} color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d2e'
  },
  logo:{
    marginBottom: 18
  },
  inputContainer:{
    width:'95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14
  },
  input:{
    width: '95%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#fff'
  },
  button:{
    width: '95%',
    height: 40,
    backgroundColor: '#3fff03',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }
})
