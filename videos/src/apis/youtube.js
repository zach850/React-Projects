import axios from 'axios'


const KEY = "AIzaSyCo6r5Pe2Q0xzmb0CktxNcFo6XtYWnzdTg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
