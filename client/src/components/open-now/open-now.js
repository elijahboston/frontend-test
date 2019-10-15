import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../svg/dot.svg';

const closedColor = '#FF3548';

const OpenNow = ({ isClosed }) =>
  <div className='open-or-closed'>
      <Dot width='.8em' height='.8em' fill={isClosed ? closedColor : ''} />
      <span>{isClosed ? 'Closed' : 'Open Now'}</span>
    <style jsx>{`

    `}</style>
  </div>;

OpenNow.propTypes = {
  isClosed: PropTypes.bool
}

OpenNow.defaultProps = {
  isClosed: false
}

export default OpenNow;