import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import css from 'styled-jsx/css';
import ThemeContext from '../../contexts/theme-context';

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
    text-transform: uppercase;
    font-weight: lighter;
  }
`;

const LearnMore = ({ to }) => {
  const theme = useContext(ThemeContext);

  // Insert backgroundColor via style property since
  // we need context
  return (
    <React.Fragment>
      <Link to={to} className={className} style={{
        backgroundColor: theme.primary,
        color: theme.buttonText
      }}>
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