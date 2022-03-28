import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Cards from '../Cards';
import style from './GroupBy.module.scss';

export default function GroupBy({ countries }) {
  const [groupBy, setGroupBy] = React.useState('continent');

  if (countries.length === 0) {
    return <div>Country not found</div>;
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
      <div className={style.container}>
        <p>Group By: </p>
        <button
          className={groupBy === 'continent' ? 'isSelect' : ''}
          type="button"
          onClick={() => setGroupBy('continent')}
        >
          Continent
        </button>
        <button
          className={groupBy === 'language' ? 'isSelect' : ''}
          type="button"
          onClick={() => setGroupBy('language')}
        >
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
