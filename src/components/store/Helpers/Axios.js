import axios from 'axios';

export const axiosPostInstance = async (url, payload) => {
  const token = localStorage.getItem('token');
  const options = {
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  const response = await axios.post(url, payload, options);
  return response;
};

export const axiosGetInstance = async (url) => {
  const token = localStorage.getItem('token');
  const options = {
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  const response = await axios.get(url, options);
  return response;
};
