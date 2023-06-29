import axios from "axios";

axios.defaults.baseURL = 'https://649d50939bac4a8e669d8de5.mockapi.io'


export const addMaterial = async (values) => {
const res = await axios.post('/materials', values)
return res.data;
}

export const getMaterial = async () => {
   const res = await axios.get('/materials');
   return res.data
}

export const deleteMaterial = async (id) => {
   const res = await axios.delete(`/materials/${id}`);
   return res.data
}

export const updateMaterial = async (fields) => {
const res = await axios.put(`/materials/${fields.id}`, fields)
return res.data
}