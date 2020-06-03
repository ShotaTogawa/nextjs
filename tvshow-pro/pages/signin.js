import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo({ ...signinInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signin',
        { ...signinInfo }
      );
      cookies.set(null, 'token', response.data.token, { path: '/' });
      router.replace('/[country]', '/us');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          name="email"
          placeholder="enter your email"
          value={signinInfo.email}
          onChange={handleInputChange}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="enter your password"
          value={signinInfo.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
