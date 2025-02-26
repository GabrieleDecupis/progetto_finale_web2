import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clienti`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Clienti:', error);
    return [];
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/prodotti`);
    return response.data;
  } catch (error) {
    console.error('Error fetching prodotti:', error);
    return [];
  }
};