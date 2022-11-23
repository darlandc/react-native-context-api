import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/auth';


export default function Pedidos() {
  const { name, mail } = useContext(AuthContext)

 return (
   <View style={styles.container}>
     <Text>Orders:</Text>
     <Text>Name: {name} </Text>
     <Text>Mail: {mail} </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})