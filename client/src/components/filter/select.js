import React from 'react';
import FilterSection from './filter-section';
import SelectOption from './select-option';
import CaretDown from '../svg/caret-down.svg';

const Icon = ({ children }) => 
  <span className='icon'>
    {children}
  </span>;

// Select is a custom dropdown selector
const Select = ({ label, options, selectedOptions, toggleOption, isOpen, minWidth=6, onClick }) => {
  return (
    <FilterSection onClick={onClick}>
      <div className='select'>
        <div className='title'>
          <span>{label}</span>
          <Icon>
            <CaretDown />
          </Icon>
        </div>
        <div className='dropdown-container'>
          <ul className='dropdown'>
            {options.map(option => {
              const selected = selectedOptions && selectedOptions.includes(option.value);
              console.log('selectedOptions', selectedOptions, selected);
              return (
                <SelectOption key={option.label} toggleOption={toggleOption} selected={selected} { ...option } />
              )
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .select {
          min-width: ${minWidth}rem;
        }

        .dropdown-container {
          width: 100%;
          position: relative;
        }

        ul.dropdown {
          width: 100%;
          position: absolute;
          top: .5rem;
          display: ${isOpen ? 'flex' : 'none'};
          flex-direction: column;
          list-style-type: none;
          margin: 0;
          padding: 0;
          background: #fff;
          border: 1px solid #C8C8C8;
        }

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </FilterSection>
  );
}
export default Select;