import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import style from './Cards.module.scss';

export default function Cards({ title, countries }) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.conten}>
        {countries.map(({
          name, emoji, code, phone, currency, capital,
        }) => (
          <Card
            key={name}
            name={name}
            emoji={emoji}
            code={code}
            phone={phone}
            currency={currency}
            capital={capital}
          />
        ))}
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(Object).isRequired,
};
