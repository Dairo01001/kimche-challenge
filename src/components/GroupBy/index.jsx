import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Cards from '../Cards';

export default function GroupBy({ countries }) {
  if (countries.length === 0) {
    return <h1>Que vas a Buscar?</h1>;
  }

  const currentGroups = _.groupBy(countries, 'continent.name');

  return (
    <div>
      <div>
        <p>Group By: </p>
        <button type="button">Continent</button>
        <button type="button">Language</button>
      </div>
      {Object.keys(currentGroups).map((key) => (
        <Cards key={key} title={key} countries={currentGroups[key]} />
      ))}
    </div>
  );
}

GroupBy.propTypes = {
  countries: PropTypes.arrayOf(Object).isRequired,
};
