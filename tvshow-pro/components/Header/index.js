import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cookies from 'nookies';

const countries = [
  {
    label: 'us',
    name: 'United State',
  },
  { label: 'br', name: 'Brazil' },
];

const Header = () => {
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  useEffect(() => {
    cookies.set(null, 'defaultCountry', selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }, [selectedCountry]);

  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <option key={country.label} value={country.label}>
          {country.name}
        </option>
      );
    });
  };

  const onChange = (e) => {
    setSelectedCountry(e.target.value);
    // /country
    router.push(`/[country]`, `/${e.target.value}`);
  };
  return (
    <div className="header">
      <select value={selectedCountry} onChange={onChange}>
        {renderCountries()}
      </select>
      <style jsx>{`
        .header {
          padding: 20px;
          margin-bottom: 10px;
          background-color: #333;
          color: #fff;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Header;
