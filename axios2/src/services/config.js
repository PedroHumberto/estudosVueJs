import axios from 'axios';

export const http = axios.create({
    baseURL: '/',
    timeout: 10000
})

export const http2 = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    timeout: 5000,
  });