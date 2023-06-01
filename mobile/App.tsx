// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes'


export default function App() {
  return (
    <NavigationContainer>
      {/* <Text>Pizzaria do Thu e do Allanzinho e da Sophia</Text> */}
      <StatusBar backgroundColor='#1d1d2e' barStyle="light-content" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: '50%'
//   },
// });
