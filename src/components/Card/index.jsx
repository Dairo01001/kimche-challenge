import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ name, emoji, code }) {
  return (
    <div>
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
