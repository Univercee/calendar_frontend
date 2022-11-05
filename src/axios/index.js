import axios from 'axios'
window.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
let sessionKey = sessionStorage.getItem('sessionKey');
if(sessionKey) axios.defaults.headers.common.Authorization = 'Bearer ' + sessionKey;