const CustomError = ({ statusCode }) => {
  console.log(statusCode);
  if (statusCode === 404) {
    return <h1>The resource was not found</h1>;
  }
  return <h1>Oops! Something went wrong</h1>;
};

CustomError.getInitialProps = ({ err, res }) => {
  // resはserverside
  return res ? res.statusCode : err ? err.statusCode : 404;
};

export default CustomError;
