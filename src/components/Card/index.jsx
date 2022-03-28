import React from 'react';
import PropTypes from 'prop-types';

import style from './Card.module.scss';

export default function Card({ name, emoji, code }) {
  return (
    <div className={style.card}>
      <div>
        <h2>{emoji}</h2>
        <h3>{name}</h3>
      </div>
      <div>
        <p>
          Code:
          {' '}
          {code}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
