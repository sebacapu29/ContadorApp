import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback} from 'react-native'

interface Props{
    title:string;
    onPress: ()=> void; 
    position?: 'r' | 'l';
}

export const Fab = ({title, onPress, position}: Props) => {

  const ios = () => {
      return (
        <TouchableOpacity
            onPress={ onPress }
            activeOpacity = { 0.75 }
            style={  [ styles.fabLocationBottomLocation,
                    (position == 'l') ? styles.left : styles.right]}>
        <View style={styles.floatAcctionButton}>        
            <Text style={styles.floatAcctionButtonText}>{title}</Text>
            </View> 
        </TouchableOpacity>
      )
    }
    const android = () => {
      return (
        <View style={[ styles.fabLocationBottomLocation,
          (position == 'l') ? styles.left : styles.right]}>
          <TouchableNativeFeedback
              onPress={ onPress }
              background = {TouchableNativeFeedback.Ripple("#28425B", false, 30) }>
          <View style={styles.floatAcctionButton}>        
              <Text style={styles.floatAcctionButtonText}>{title}</Text>
          </View> 
          </TouchableNativeFeedback>
        </View>
      )
    }
    return (Platform.OS === 'ios') ? ios() :android();
}

const styles = StyleSheet.create({
    
  fabLocationBottomLocation:{
    position:'absolute',
    bottom:25,
  },
  left:{
    left:25
  },
  right:{
    right:25
  },

  floatAcctionButton:{
    backgroundColor:'#5856d6',
    width: 60,
    height: 60,
    borderRedius: 100,
    justifyContent:'center',
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:4
    },
    shadowOpacity:0.30,
    shadowRadius:4.65,
    elevation:8
  },
  floatAcctionButtonText:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    alignSelf: 'center'
  }
})
