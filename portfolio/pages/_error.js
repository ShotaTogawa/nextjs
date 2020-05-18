import Layout from '../components/layout';

export default ({ statusCode }) => (
  <Layout title="Error">
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get user data`}
  </Layout>
);
