import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTransition, config, animated } from 'react-spring';
import { ThemeContext } from '../../contexts';
import FilterSection from './filter-section';
import SelectOption from './select-option';
import CaretDown from '../svg/caret-down.svg';

const Icon = ({ children }) => 
  <span className='icon'>
    {children}
  </span>;

Icon.propTypes = {
  children: PropTypes.object
}

Icon.defaultProps = {
  children: {}
}

const DropDown = ({ options, selectedOptions, toggleOption }) => {
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

DropDown.propTypes = {
  styleProps: PropTypes.object,
  options: PropTypes.array,
  toggleOption: PropTypes.func
}

DropDown.defaultProps = {
  styleProps: '',
  options: [],
  toggleOption: () => {}
}

// Select is a custom dropdown selector
const Select = ({ label, options, selectedOptions, toggleOption, isOpen, minWidth, height, onClick }) => {
  const transitions = useTransition(isOpen, null, {
    from: {
      position: 'absolute',
      width: '100%',
      top: '.5rem',
      height: '0rem',
      opacity: 0
    },
    enter: {
      opacity: 1,
      height: height > 0 ? `${height}rem`: '12rem'
    },
    leave: {
      opacity: 0,
      height: '0rem'
    },
  })

  return (
    <FilterSection>
      <div className='select'>
        <div className='title' onClick={onClick}>
          <span>{label}</span>
          <Icon>
            <CaretDown />
          </Icon>
        </div>

        <div className='dropdown-container'>
          {transitions.map(({ item, key, props }) =>
            item && <animated.div style={props}>
              <DropDown
                options={options}
                toggleOption={toggleOption}
                selectedOptions={selectedOptions} />
            </animated.div>)}
        </div>
      </div>
      <style jsx>{`
        .select {
          min-width: ${minWidth}rem;
        }

        animated.div {
          width: 100%;
          overflow: hidden;
          position: absolute;
          top: .5rem;
        }

        .dropdown-container {
          width: 100%;
          position: relative;
          height: auto;
          max-height: 20rem;
        }

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </FilterSection>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  selectedOptions: PropTypes.array,
  toggleOption: PropTypes.func,
  isOpen: PropTypes.bool,
  minWidth: PropTypes.number,
  onClick: PropTypes.func
}

Select.defaultProps = {
  label: '',
  options: [],
  selectedOptions: [],
  toggleOption: () => {},
  isOpen: false,
  minWidth: 6,
  onClick: () => {}
}

export default Select;