import { useRouter } from 'next/router';
import { useState } from 'react';

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
      <select value={selectedCountry} onChange={(e) => onChange(e)}>
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
