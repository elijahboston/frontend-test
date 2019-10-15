import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import css from 'styled-jsx/css';

// Using styled-jsx's resolve method to
// generate CSS that will be applied to the
// nested Link component
const { className, styles } = css.resolve`
  a {
    text-decoration: none;
    text-align: center;
    display: block;
    padding: .8rem .5rem;
    font-size: .8rem;
    color: #fff;
    background-color: #002B56;
    text-transform: uppercase;
    font-weight: lighter;
  }
`;

const LearnMore = ({ to }) => {
  return (
    <React.Fragment>
      <Link to={to} className={className}>
        Learn More
      </Link>
      {styles}
    </React.Fragment>

  )
}

LearnMore.propTypes = {
  to: PropTypes.string
}

LearnMore.defaultProps = {
  to: '/'
}

export default LearnMore;