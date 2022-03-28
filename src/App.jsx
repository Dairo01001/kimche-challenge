import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';

import GroupBy from './components/GroupBy';

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
  const [searchCountries, setSearchCountries] = useState([]);
  const [input, setInput] = useState('');

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const isCountry = (country, countryName) => country.name.toLowerCase().includes(countryName);

  const handleChange = (e) => {
    const { countries } = result.data;
    const countryName = e.target.value.toLowerCase();
    setInput(countryName);
    setSearchCountries(_.filter(countries, (country) => isCountry(country, countryName)));
  };

  return (
    <div className="container">
      <h1>Country Search</h1>
      <input
        type="text"
        placeholder="country"
        value={input}
        onChange={handleChange}
      />
      <GroupBy countries={searchCountries} />
    </div>
  );
}
