import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';

const SelectOption = ({ title, alias, isSelected, toggleOption }) => {
  const theme = useContext(ThemeContext);
  
  const onClick = () => {
    toggleOption(alias);
  };
  
  return (
    <li onClick={() => onClick()}>
      <div className='checkmark'>
        {isSelected && <i className='icon icon-check'></i>}
      </div>
      <span>{title}</span>
      <style jsx>{`
        .icon {
          font-size: 1rem;
          color: white;
        }

        li {
          font-size: .9rem;
          display: flex;
          padding: .5rem 1rem;
          justify-content: flex-start;
          align-items: center;
        }

        li:hover {
          background: whitesmoke;
        }

        .checkmark {
          width: 1rem;
          height: 1rem;
          display: flex;
          border-radius: 20rem;
          background: ${isSelected ? 'black' : 'white' };
          border: 1px solid ${isSelected ? 'transparent' : theme.borderLight};
          margin-right: .5rem;
        }
      `}</style>
    </li>
  );
}

SelectOption.propTypes = {
  title: PropTypes.string,
  alias: PropTypes.any,
  isSelected: PropTypes.bool,
  toggleOption: PropTypes.func
}

SelectOption.defaultProps = {
  title: 'Option',
  alias: 1,
  isSelected: false,
  toggleOption: () => {}
}

export default SelectOption;