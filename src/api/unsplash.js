import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e8220082813b6612fcfcafd2683993ede350b2d01de5323c734e67cc1eb5c3ee'
    }
});