import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://deepnetbackend.erickpjoshy.cloud/',
  timeout: 20000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default customAxios;
