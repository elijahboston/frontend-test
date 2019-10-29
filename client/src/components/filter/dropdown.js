import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import SelectOption from './select-option';

const Dropdown = ({ options, selectedOptions, toggleOption }) => {
  const theme = useContext(ThemeContext);

  return(
    <ul className='dropdown'>
      {options.map(option => {
        const isSelected = selectedOptions && selectedOptions.includes(option.alias);

        return (
          <SelectOption key={option.title} toggleOption={toggleOption} isSelected={isSelected} { ...option } />
        )
      })}
      <style jsx>{`
        ul.dropdown {
          height: inherit;
          top: .5rem;
          max-height: 20rem;
          display: flex;
          overflow: scroll;
          width: 100%;
          flex-direction: column;
          list-style-type: none;
          margin: 0;
          padding: 0;
          background: #fff;
          border: 1px solid ${theme.borderLight};
          -webkit-box-shadow: 0px 11px 15px -6px rgba(0,0,0,0.3);
          -moz-box-shadow: 0px 11px 15px -6px rgba(0,0,0,0.3);
          box-shadow: 0px 11px 15px -6px rgba(0,0,0,0.3);
        }
      `}</style>
    </ul>
  )
}

Dropdown.propTypes = {
  selectedOptions: PropTypes.array,
  options: PropTypes.array,
  toggleOption: PropTypes.func
}

Dropdown.defaultProps = {
  selectedOptions: [],
  options: [],
  toggleOption: () => {}
}

export default Dropdown;