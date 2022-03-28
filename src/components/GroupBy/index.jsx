import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Cards from '../Cards';

export default function GroupBy({ countries }) {
  const [groupBy, setGroupBy] = React.useState('continent');

  if (countries.length === 0) {
    return <h1>Que vas a Buscar?</h1>;
  }

  const languages = (country) => {
    const language = country.languages.map((languag) => languag.name);
    return language.join(', ');
  };

  const currentGroups = groupBy === 'continent'
    ? _.groupBy(countries, 'continent.name')
    : _.groupBy(countries, languages);

  return (
    <div>
      <div>
        <p>Group By: </p>
        <button type="button" onClick={() => setGroupBy('continent')}>
          Continent
        </button>
        <button type="button" onClick={() => setGroupBy('language')}>
          Language
        </button>
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
