import React from 'react';
import PropTypes from 'prop-types';
import Check from '../svg/check.svg';

const SelectOption = ({ title, alias, isSelected, toggleOption }) => {
  const onClick = () => {
    toggleOption(alias);
  };
  
  return (
    <li onClick={() => onClick()}>
      <div className='checkmark'>
        {isSelected && <Check />}
      </div>
      <span>{title}</span>
      <style jsx>{`
        li {
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
          background: #fff;
          border: 1px solid ${isSelected ? 'transparent' : '#ccc'};
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