import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with backend URL
});

export default apiClient;
