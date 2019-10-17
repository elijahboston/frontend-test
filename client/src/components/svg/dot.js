import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ width='.8rem', height='.8rem', fill }) =>
  <svg width={width} height={height} viewBox="0 0 8 8">
    <circle cx="4" cy="9" r="4" transform="translate(0 -5)" fill={fill} fillRule="evenodd"></circle>
  </svg>;

Dot.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
}

Dot.defaultProps = {
  width: '1rem',
  height: '1rem',
  fill: '#ffffff'
}

export default Dot;