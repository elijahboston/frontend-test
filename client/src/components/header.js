import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from './center-content';

const Header = ({ title, description }) =>
  <header className='page-header'>
    <CenterContent>
      <h1>{title}</h1>
      <p>{description}</p>
    </CenterContent>
  </header>;

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Header.defaultProps = {
  title: 'Restaurants',
  description: 'Some text'
};

export default Header;