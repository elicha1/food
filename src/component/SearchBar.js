import React from 'react';
import {TextInput,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =({term, onTermchange,onTermSubmited})=>{
    return(<View style={styles.background}>
        <Feather name="search" style={styles.IconStyle}
       />
     <TextInput 
     autoCapitalize='none'
     autoCorrect={false}
     placeholder='Search' 
     style={styles.InputStyle}
     value={term}
     onChangeText ={onTermchange}
     onEndEditing={onTermSubmited}
     />
    </View>);
};
const styles= StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor : '#f0EEEE',
        marginHorizontal: 15,
        borderRadius:5,
        height :50,
        flexDirection:"row",
        marginBottom:10


    },
    InputStyle:{
        flex:1,
        fontSize:10
      
    },
    IconStyle:{
       
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15
    }

})
export default SearchBar;