import yelp from '../api/yelp';
import {useState, useEffect} from 'react';
export default ()=>{
    const [results, setResults]=useState([]);
    const [errorMessage, setErrorMessage]=useState('');
    const searchAPI= async()=>{
     try{const response= await  yelp.get('/search',{
          params:{
              limit:50,
              term,
              location:'san jose'
          }
      })
       setResults( response.data.businesses);    
    }catch(e){
        setErrorMessage('Something went wrong!');

    }
    };
    useEffect(()=>{
        searchAPI('pasta');
    }
        ,[]
    );
    return [results,searchAPI,errorMessage];
};