import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function ResultsShowScreen({route}) {
    
    const[result,setResult]=useState(null);
    const id=route.params.id;
    const getResult=async(id)=>{
      const response= await yelp.get(`/${id}`)
      setResult(response.data)
    }
    useEffect(()=>{
     getResult(id)
    },[])
    if(!result){
        return null;
    }
    return(
        <View>
         <Text style={styles.title}>{result.name}</Text>
         <Text style={styles.phone}>{result.phone}</Text>
         <View style={styles.icon}>
         {
            result.is_closed ? <AntDesign name="closecircleo"
             size={30} color="black"/> :<MaterialIcons name="delivery-dining" size={30} color="black" />

         }
        
         </View>
        
        
        <Image style={styles.image} source={{uri:result.image_url}}/>
        </View>
    );
 }
const styles = StyleSheet.create({
    image:{
        height:180,
        borderRadius:20,
    },
    title:{
        alignSelf:"center",
        marginVertical:10,
    },
    phone:{
        alignSelf:"center",
        fontSize:20,
    },
    icon:{
        alignSelf:"center"
    }
})