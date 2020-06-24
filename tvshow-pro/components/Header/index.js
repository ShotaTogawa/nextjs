import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cookies from 'nookies';
import Link from 'next/link';
import { isAuthenticated } from '../../utils/withAuthorization';

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
    if (selectedCountry) {
      cookies.set(null, 'defaultCountry', selectedCountry, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
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

  const handleSignOut = () => {
    cookies.destroy(null, 'token');
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

      {isAuthenticated() && (
        <Link href="/[country]" as={`/${selectedCountry}`}>
          <a onClick={handleSignOut}>Sign out</a>
        </Link>
      )}
      <style jsx>{`
        .header {
          padding: 20px;
          margin-bottom: 10px;
          background-color: #333;
          color: #fff;
          text-align: center;
          display: flex;
          justify-content: space-between;
        }

        .header > :global(a) {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Header;
