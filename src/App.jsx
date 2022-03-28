import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';

import GroupBy from './components/GroupBy';
import Loading from './components/Loading';

const GET_ALL_COUNTRIES = gql`
  query {
    countries(
      filter: { continent: { in: ["AF", "AN", "AS", "EU", "NA", "OC", "SA"] } }
    ) {
      emoji
      name
      code
      native
      currency
      capital
      phone
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

export default function App() {
  const result = useQuery(GET_ALL_COUNTRIES);
  const [searchCountries, setSearchCountries] = useState(null);
  const [input, setInput] = useState('');

  if (result.loading) {
    return <Loading />;
  }

  const isCountry = (country, countryName) => country.name.toLowerCase().includes(countryName);

  const handleChange = (e) => {
    const { countries } = result.data;
    const countryName = e.target.value.toLowerCase();
    setInput(e.target.value);
    setSearchCountries(
      _.filter(countries, (country) => isCountry(country, countryName)),
    );
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '3.5rem' }}>Country Search</h1>
      <input
        className="input"
        style={{
          margin: '10px',
          fontSize: '2rem',
          padding: '10px',
          width: '70%',
        }}
        type="text"
        placeholder="Search for a country"
        value={input}
        onChange={handleChange}
      />
      {searchCountries ? (
        <GroupBy countries={searchCountries} />
      ) : (
        <div className="info">
          Write something to start!
          {' '}
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </div>
      )}
    </div>
  );
}
