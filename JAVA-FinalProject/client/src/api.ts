import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getRecords = async () => {
  const { data } = await api.get('/records');
  return data;
};

export const createRecord = async (dataForm: any) => {
  const { data } = await api.post('/records', dataForm);
  return data;
};

export const deleteRecord = async (id: number) => {
  const { data } = await api.delete(`/records/${id}`);
  return data;
};
