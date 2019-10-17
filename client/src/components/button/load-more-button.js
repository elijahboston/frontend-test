import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import buttonStyle from './button.style';

// LoadMoreButton uses the base Button styling
// and applies a few adjustments
const LoadMoreButton = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <button type='button' className='button' onClick={onClick}>
      {children}
      <style jsx>{buttonStyle}</style>
      <style jsx>{`
        .button {
          margin: 3rem 0 5rem 0;
          cursor: pointer;
          color: ${theme.primary};
          border: 1px solid ${theme.primary};
          width: 20rem;
        }
      `}</style>
    </button>
  );
};

LoadMoreButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
}

LoadMoreButton.defaultProps = {
  children: 'Load More',
  onClick: () => {}
}

export default LoadMoreButton;