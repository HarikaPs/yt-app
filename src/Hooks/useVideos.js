import {useState,useEffect} from 'react';
import Youtube from '../API/Youtube';

const useVideos = (defaultSearchTerm) =>{
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async (term)=>{
        const response = await   Youtube.get('/search',{
               params : {
                   q: term
               }
           })
           setVideos(response.data.items );
          
       };

       //[]- react convention to return
       //{}-JavaScript convention to return
       //Can use any one of them

        return [videos,search];
    //    return {videos,onTermSubmit};

};

export default useVideos;