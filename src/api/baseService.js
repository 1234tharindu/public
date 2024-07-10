// src/api/baseService.js
import axios from 'axios';

// Function to get the JWT token (adjust based on where you store the token)
const getToken = () => {
    return localStorage.getItem('jwtToken');
};

const apiClient = axios.create({
    baseURL: 'http://localhost:5229', // Base URL for the API
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    config => {
        // Add common headers or authentication tokens here
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    response => response,
    error => {
        // Handle common errors here
        return Promise.reject(error);
    }
);

export default apiClient;
