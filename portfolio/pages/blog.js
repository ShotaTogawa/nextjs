import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="react" />
      <PostLink title="vue" />
      <PostLink title="angluar" />
    </ul>
  </Layout>
);
