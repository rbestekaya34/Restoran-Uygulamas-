import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import UseResult from '../hooks/UseResult';
import ResultsList from '../components/ResultsList';
import { useState } from 'react';




export default function SearchScreen() {
  const [searchApi,results]=UseResult();
  const [term,setTerm]=useState('');

  console.log(results);
  const filterResultsByPrice=(price)=>{
    return results.filter((result)=>{
      return result.price===price;
    })
  }
  
  return (
    <View>
    <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term)}/>
    <ResultsList title='Ucuz Restorantlar' results={filterResultsByPrice('₺')}/>
    <ResultsList title='Uygun Restoranlar'    results={filterResultsByPrice('₺₺')}/>
    <ResultsList title='Pahalı Restorantlar' results={filterResultsByPrice('₺₺₺')}/>
    



    </View>
  )
}

const styles = StyleSheet.create({})