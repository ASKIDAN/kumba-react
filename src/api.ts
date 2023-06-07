import {UserType} from 'types';

const API_URL = process.env.REACT_APP_API_URL;
function request<T>(path: string, method: 'GET' | 'POST', body?: any):Promise<T> {
  return fetch(`${API_URL}${path}`, { method, body })
    .then(data => data.json())
    .then(data => data.data);
}

const api = {
  post: <T>(path: string, data:any) => request<T>(path, 'POST', JSON.stringify(data)),
  get: <T>(path: string) => request<T>(path, 'GET'),
}

export const getUser = () => api.get<UserType>('/me');

export const postDate = (data: any) => api.post('/submit', data)
