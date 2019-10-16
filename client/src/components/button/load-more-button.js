import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';
import buttonStyle from './button.style';

const LoadMoreButton = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <button className='button' onClick={onClick}>
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

export default LoadMoreButton;