import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../svg/dot';

const openColor = '#00E8A4';
const closedColor = '#FF3548';

const OpenNow = ({ isClosed }) =>
  <div className='open-or-closed'>
      <Dot width='.6em' height='.6em' fill={isClosed ? closedColor : openColor} />
      <span className='status'>{isClosed ? 'Closed' : 'Open Now'}</span>
    <style jsx>{`
      .status {
        margin-left: .5rem;
      }
    `}</style>
  </div>;

OpenNow.propTypes = {
  isClosed: PropTypes.bool
}

OpenNow.defaultProps = {
  isClosed: false
}

export default OpenNow;