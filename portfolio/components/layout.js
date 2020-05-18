import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouterChangeStart = (url) => {
  console.log(url);
  Nprogress.start();
};

Router.onRouterChangeComplete = () => Nprogress.done();
Router.onRouterChangeError = () => Nprogress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>NextPortfolio</title>
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hireme</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1rem;
      }
    `}</style>
    <style global jsx>
      {`
        body {
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;
        }
      `}
    </style>
  </div>
);
