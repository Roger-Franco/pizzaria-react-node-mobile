import { useRoute, RouteProp } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type RouteDetailParams = {
  Order:{
    number: string | number;
    order_id: string
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

function Order() {
  const route = useRoute<OrderRouteProps>()
  return (
    <View style={styles.container}>
      <Text>Tela Order</Text>
      <Text>{route.params.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})

export default Order