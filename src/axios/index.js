import axios from 'axios'
window.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
let token = sessionStorage.getItem('token');
if(token) axios.defaults.headers.common.Authorization = 'Bearer ' + token;