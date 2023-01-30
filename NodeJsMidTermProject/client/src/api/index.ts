import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

//api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
