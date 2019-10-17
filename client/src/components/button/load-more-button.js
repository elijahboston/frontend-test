import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import buttonStyle from './button.style';

const LoadMoreButton = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <button type='button' className='button' onClick={onClick}>
      {children}
      <style jsx>{buttonStyle}</style>
      <style jsx>{`
        .button {
          color: ${theme.primary};
          border: 1px solid ${theme.primary};
          margin-bottom: 5rem;
          width: 20rem;
        }
      `}</style>
    </button>
  );
};

LoadMoreButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
}

LoadMoreButton.defaultProps = {
  children: {},
  onClick: () => {}
}

export default LoadMoreButton;