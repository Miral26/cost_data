import axios from 'axios';
import { API_BASE_URL } from '../../configs/AppConfig';

// Define default axios configuration
axios.defaults.baseURL = API_BASE_URL;

// Creates public instances
export const axiosPublic = axios.create();

// Request interceptors
const onRequestRejected = (error: any) => {
    // Show notification for request error
    console.error('error', error);
    return Promise.reject(error);
};


axiosPublic.interceptors.request.use((config) => config, onRequestRejected);