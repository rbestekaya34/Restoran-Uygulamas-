import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
    <AntDesign style={styles.iconstyle} name="search1" size={30} color="black" />
    <TextInput placeholder='Ara'
     autoCorrect={false}
     autoCapitalize='none'
     style={styles.inputstyle}
     value={term}   //giriş alanının değerini günceller.
     onChangeText={onTermChange}
     onEndEditing={onTermSubmit} />  
     
    
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle:{
   backgroundColor:'lightgray',
   flexDirection:"row",
   margin:10,
   height:50,
   alignItems:"center",
   borderRadius:20,
  },
  iconstyle:{
    marginHorizontal:15,

  },
  inputstyle:{
   flex:1,
   fontSize:18,
  },
})