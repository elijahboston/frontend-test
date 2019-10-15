import React, { useContext } from 'react';
import ThemeContext from '../../theme-context';

const Button = ({ children, clickHandler }) => {
  const theme = useContext(ThemeContext);

  return (
    <button className='button' onClick={clickHandler}>
      {children}
      <style jsx>{`
        .button {
          min-width: 10rem;
          padding: .6rem .8rem;
          text-transform: uppercase;
          color: ${theme.primary};
          background: #fff;
          border: 1px solid ${theme.primary};
        }
      `}</style>
    </button>
  );
};

export default Button;