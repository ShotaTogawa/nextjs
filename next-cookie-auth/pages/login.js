import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import { authInitialProps } from '../lib/auth';

const Login = () => {
  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  );
};

Login.getInitialProps = authInitialProps();

export default Login;
