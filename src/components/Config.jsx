import axios from "axios";

const Key = 'AIzaSyDKnxBkHHYXRESnOtA5t6bJtZe8vVPoxI8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: Key
    }
})