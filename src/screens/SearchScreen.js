import React ,{useState, useEffect}from 'react';
import {Text,View,StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../component/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../component/ResultsList';

const SearchScreen =()=>{
    const [term,setTerm]=useState('');
    const [results,searchAPI,errorMessage]=useResults();   
    const filterByPrice=(price)=>{
        return results.filter(result=>{
            return result.price=== price;

        })
    };

    return(<>
        <SearchBar term={term}
         onTermchange={setTerm}
         onTermSubmited={searchAPI}/>
        {errorMessage? <Text>{errorMessage}</Text>: null}
        <Text>We have found {results.length} results.</Text>
        <ScrollView>
        <ResultList  results={filterByPrice("$")} title="cost effective"/>
        <ResultList  results={filterByPrice("$$")} title ="less expensive"/>
        <ResultList  results={filterByPrice("$$$")} title ="very expensive"/>
        </ScrollView>

    </>);
};
const styles= StyleSheet.create({

})
export default SearchScreen;