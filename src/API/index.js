import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://shamba-fusion.purplesky-7c5a2a24.southafricanorth.azurecontainerapps.io/',
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized, redirecting...');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
