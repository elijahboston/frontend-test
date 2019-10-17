import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../svg/dot';

const openColor = '#00E8A4';
const closedColor = '#FF3548';

const OpenNow = ({ isOpen }) =>
  <div className='open-or-closed'>
      <Dot width='.6em' height='.6em' fill={isOpen ? openColor : closedColor} />
      <span className='status'>{isOpen ? 'Open Now' : 'Closed'}</span>
    <style jsx>{`
      .status {
        margin-left: .5rem;
      }
    `}</style>
  </div>;

OpenNow.propTypes = {
  isOpen: PropTypes.bool
}

OpenNow.defaultProps = {
  isOpen: false
}

export default OpenNow;