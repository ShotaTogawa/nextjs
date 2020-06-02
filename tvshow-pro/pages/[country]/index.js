import axios from 'axios';

const CountryTest = ({ shows }) => {
  return <h1>Home</h1>;
};

CountryTest.getInitialProps = async () => {
  const response = await axios.get(
    'http://api.tvmaze.com/schedule?country=US&date=2014-12-01'
  );
  return {
    shows: response.data,
  };
};
export default CountryTest;
