import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import style from './Cards.module.scss';

export default function Cards({ title, countries }) {
  return (
    <>
      <h1>{title}</h1>
      <div className={style.container}>
        {countries.map(({ name, emoji, code }) => (
          <Card key={name} name={name} emoji={emoji} code={code} />
        ))}
      </div>
    </>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(Object).isRequired,
};
