import Link from 'next/link';
import Layout from '../components/layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
  state = {
    user: null,
  };
  //   componentDidMount() {
  //     fetch('https://api.github.com/users/ShotaTogawa')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({ user: data });
  //       });
  //   }

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/ShotaTogawa');
    const data = await res.json();

    return { user: data };
  }
  render() {
    const { user } = this.props;
    return (
      <Layout title="about">
        <p>{user.name}</p>
        <p>A JS programmer</p>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}
