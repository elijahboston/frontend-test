import React from 'react';

const Dot = ({ width='.8rem', height='.8rem', fill }) => <svg width={width} height={height} viewBox="0 0 8 8">
  <circle cx="4" cy="9" r="4" transform="translate(0 -5)" fill={fill} fill-rule="evenodd"></circle>
</svg>

export default Dot;