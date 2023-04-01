import axios from 'axios';

const API_LOCAL_URL = 'http://localhost:8080/';
const ORIGNAL_API_URL = 'https://newsapi.org/v2/';

export default axios.create({
    baseURL: API_LOCAL_URL
})