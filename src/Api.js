import axios from 'axios';

const api = axios.create({ baseURL: "https://localhost:44301/api/" }); //JWT TOKEN
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAiLCJqdGkiOiJlYWM4MmYzNy04ZDgyLTQ5MTItYmFhZC04ZmU2ZDVhMGI5NDciLCJleHAiOjE1OTY1NDM1MDB9.fd_LfEjPlbVKpvhDauy89KXN165TeJB26Gc_HvfWz3Q";
api.interceptors.request.use(function (config) {
    config.validateStatus = false
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
}, function (error) {
    return Promise.reject(error);
});

export default api;


