import React from 'react';
import PropTypes from 'prop-types';

import style from './Card.module.scss';

export default function Card({
  name, emoji, code, phone, currency, capital,
}) {
  return (
    <div className={style.card}>
      <h3>{name}</h3>

      <p style={{ paddingLeft: 15 }}>
        <strong>Capital: </strong>
        {' '}
        {capital || 'N/A'}
      </p>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p style={{ fontSize: 100 }}>{emoji}</p>
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
            {currency || 'N/A'}
          </span>
        </div>
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
