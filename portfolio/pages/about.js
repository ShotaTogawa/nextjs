import Link from 'next/link';
import Layout from '../components/layout';
import { Component } from 'react';
import Error from '../pages/_error';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
  //   state = {
  //     user: null,
  //   };
  //   componentDidMount() {
  //     fetch('https://api.github.com/users/ShotaTogawa')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({ user: data });
  //       });
  //   }

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/ShotaTogawa');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }
  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="about">
        <p>{user.name}</p>
        <p>A JS programmer</p>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}
