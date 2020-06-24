import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const initialState = {
  email: '',
  password: '',
};

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState(initialState);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, name } = signupInfo;

    if (!email || !password || !name) {
      return;
    }

    try {
      const response = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signup',
        { ...signupInfo }
      );
      cookies.set(null, 'token', response.data.token, { path: '/' });
      router.replace('/[country]', '/us');
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="name"
          placeholder="enter your name"
          value={signupInfo.name}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        <CustomInput
          type="email"
          name="email"
          placeholder="enter your email"
          value={signupInfo.email}
          onChange={handleInputChange}
          onBlur={validateEmail}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="enter your password"
          value={signupInfo.password}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        {error && <div className="error">{error}</div>}
        <Link href="/signin">
          <a>Already have an account</a>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
