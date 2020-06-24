import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo({ ...signinInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = signinInfo;

    if (email || !password) {
      return;
    }

    try {
      const response = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signin',
        { ...signinInfo }
      );
      cookies.set(null, 'token', response.data.token, { path: '/' });
      router.replace('/[country]', '/us');
    } catch (e) {
      console.log(e);
      setError(e.message);
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
          onBlur={validateEmail}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="enter your password"
          value={signinInfo.password}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
