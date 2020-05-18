import Link from 'next/link';
import Layout from '../components/layout';

export default () => (
  <Layout title="about">
    <Link href="/">
      <a>Go to homepage</a>
    </Link>
    <p>A JS programmer</p>
    <img src="/static/cat_javascript.png" alt="" />
  </Layout>
);
