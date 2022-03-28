import React from 'react';
import { gql, useQuery } from '@apollo/client';

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
  const countries = useQuery(GET_ALL_COUNTRIES);

  if (countries.loading) {
    return <div>Loading...</div>;
  }

  console.log(countries.data);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
