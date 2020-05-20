import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (e) {
      console.log(e);
      stories = [];
    }
    return { page, stories };
  }
  render() {
    const { page, stories } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Heacker Next"
        description="A Hacker News clone made with Next.js"
      >
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page({page + 1})</a>
          </Link>
          <style jsx>{`
            footer {
              padding: 1rem;
            }
            footer a {
              font-weight: bold;
              text-decoration: none;
              color: black;
            }
          `}</style>
        </footer>
      </Layout>
    );
  }
}
export default Index;
