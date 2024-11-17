import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const sendContactMessage = async (data: any) => {
  const response = await api.post('/contact', data);
  return response.data;
};

export const subscribeNewsletter = async (email: string) => {
  const response = await api.post('/newsletter/subscribe', { email });
  return response.data;
};

export const getMenuItems = async () => {
  const response = await api.get('/menu');
  return response.data;
};