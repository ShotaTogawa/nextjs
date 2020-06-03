import { useState } from 'react';
import CustomInput from '../components/CustomInput';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo({ ...signinInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signinInfo);
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
