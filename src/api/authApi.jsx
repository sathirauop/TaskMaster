// src/api/authApi.js
import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

// Add a request interceptor to include the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // Handle network errors
    if (!error.response) {
      console.error('Network error or server not running');
      // You could dispatch a global "offline" state here
    }
    
    return Promise.reject(error);
  }
);

export const loginUser = async (credentials) => {
  try{
    const response = await api.post('/auth/login', credentials);
    return response.data;
  }catch(error){
    if(error.response.status === 401){
      throw new Error('Login failed! Invalid email or password');
    }else if(error.response.status === 403){
      throw new Error('Account not activated');
    }else if(error.response.status === 404){
      throw new Error('User not found');
    }else{
      throw new Error('Login failed');
    }
  }
  
};

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const refreshToken = async () => {
  const response = await api.post('/auth/refresh');
  return response.data;
};

export default api; // Export the configured instance for other API files