// HOC has to return another component
import { Component } from 'react';
import cookies from 'nookies';
import Router from 'next/router';

const authenticate = (context) => {
  const { token } = cookies.get(context);

  cookies.set(
    context,
    'plannedRoute',
    JSON.stringify({ as: context.asPath, href: context.pathname }),
    { path: '/' }
  );
  if (context.req && !token) {
    // if it not present, redierect user to signin page
    context.res.writeHead(302, { Location: '/signin' });
    context.res.end();
    return;
  }
  if (!token) {
    Router.push('/signin');
  }

  return token;
};

export const withAuthorization = (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(context) {
      const token = authenticate(context);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(context));

      return { ...componentProps, token };
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export const isAuthenticated = (context) => {
  const { token } = cookies.get(context);

  return token;
};
