import React from 'react';
import PropTypes from 'prop-types';

const openColor = '#00E8A4';
const closedColor = '#FF3548';

const OpenNow = ({ isOpen }) =>
  <div className='open-or-closed'>
      <i className='icon icon-dot'></i>
      <span className='status'>{isOpen ? 'Open Now' : 'Closed'}</span>
    <style jsx>{`
      .icon {
        color: ${isOpen ? openColor : closedColor}
      }
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