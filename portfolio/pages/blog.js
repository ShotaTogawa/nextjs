import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="vue-post" title="Vue Post" />
      <PostLink slug="angular-post" title="Angluar Post" />
    </ul>
  </Layout>
);
