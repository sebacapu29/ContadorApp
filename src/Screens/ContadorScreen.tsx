import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../Components/Fab';

const ContadorScreen = () => {
const [contador, setContador] = useState(10);

  return (
    <View style={{flex:1}}>
        <Text style={{ textAlign:'center', 
                    fontSize:40,
                    top:100}}>Contador: {contador}
        </Text>
        <Fab 
          title= "+1"
          onPress={()=>setContador(contador + 1)}
          position='r'

        />
            <Fab 
          title= "-1"
          onPress={()=>setContador(contador - 1)}
          position='l'
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  },
  title:{
    fontSize:40,
    top:-15,
    textAlign:'center'
  }
})

export default ContadorScreen