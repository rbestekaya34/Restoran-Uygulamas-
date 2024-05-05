import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default() => {
   const [results, setResults] = useState([]);
   const searchApi = async(searchTerm) => {
    try {
        const response = await yelp.get('/search',{
            params:{
                location: 'İstanbul',
                sort_by:'best_match', //burda verılen parametreye gore arama ıslemını yapar(SearchTerm)
                limit: 20,
                term:searchTerm,
            },
          });
          setResults(response.data.businesses); 
    } catch (error) {
        console.log(error);
    }
    
   };

    useEffect(()=> {
        searchApi('Toast');
    },[]);


    return[searchApi,results];
}
