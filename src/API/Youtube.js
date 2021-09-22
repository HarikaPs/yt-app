import axios from 'axios';

const KEY = 'AIzaSyC52FcA-xM-wAi0DGSmGce1y9bz6RAUTh4';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part : 'snippet',
        maxResults : 5,
        key : KEY 
    }
});
