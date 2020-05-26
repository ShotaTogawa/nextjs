import axios from 'axios';

// cookieを渡すため
axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
  const response = await axios.post('/api/login', { email, password });
  console.log(response.data);
};

export const getUserProfile = async () => {
  const { data } = await axios.get('/api/profile');
  console.log(data);
  return data;
};
