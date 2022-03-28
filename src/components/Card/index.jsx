import React from 'react';
import PropTypes from 'prop-types';

import style from './Card.module.scss';

export default function Card({
  name, emoji, code, phone, currency, capital,
}) {
  return (
    <div className={style.card}>
      <header>
        <h2>{emoji}</h2>
        <h3>{name}</h3>
      </header>
      <div>
        <h4>
          <strong>Capital: </strong>
          {' '}
          {capital}
        </h4>
      </div>
      <div>
        <span>
          <strong>Code:</strong>
          {' '}
          {code}
        </span>
        <span>
          <strong>Phone:</strong>
          {' '}
          +
          {phone}
        </span>
        <span>
          <strong>Currency:</strong>
          {' '}
          {currency}
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};
