import { useEffect } from 'react';
import axios from 'axios';

const CountryTest = () => {
  useEffect(() => {
    axios
      .get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then((response) => console.log(response.data));
  }, []);

  return <h1>Home</h1>;
};

export default CountryTest;
