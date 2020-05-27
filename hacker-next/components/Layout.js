import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children, title, description, backButton }) => (
  <div>
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <nav>
        {backButton && (
          <span onClick={() => Router.back()} className="back-button">
            &#x2b05;
          </span>
        )}
        <Link href="/">
          <a>
            <span className="main-title">Hacker Next</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>

    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1rem;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: 1rem;
        cursor: pointer;
      }
    `}</style>
    <style global jsx>
      {`
        body {
          background: white;
          font-family: Verdana, sans-serif;
        }
      `}
    </style>
  </div>
);

export default Layout;
