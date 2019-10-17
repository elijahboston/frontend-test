import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import buttonStyle from './button.style';

const Button = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <button type='button' className='button' onClick={onClick}>
      {children}
      <style jsx>{buttonStyle}</style>
      <style jsx>{`
        .button {
          cursor: pointer;
          color: ${theme.primary};
          border: 1px solid ${theme.primary};
        }
      `}</style>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: 'Button',
  onClick: () => {}
}

export default Button;