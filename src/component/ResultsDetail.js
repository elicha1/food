import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

const ResultsDetail =({result})=>{
 return (<View style={styles.container}>
     <Image style={styles.images} source={{uri: result.image_url}}/>
     <Text style={styles.name}>{result.name}</Text>
     <Text>{result.rating} Starrs, {result.review_count} Reviews</Text>
 </View>)
};
 
const styles =StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height: 120,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    }
});
export default ResultsDetail;