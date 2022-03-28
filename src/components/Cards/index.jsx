import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

export default function Cards({ title, countries }) {
  return (
    <div>
      <h1>{title}</h1>
      {countries.map(({ name, emoji, code }) => (
        <Card key={name} name={name} emoji={emoji} code={code} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(Object).isRequired,
};
