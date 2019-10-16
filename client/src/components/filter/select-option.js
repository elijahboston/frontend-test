import React from 'react';
import Check from '../svg/check.svg';

const SelectOption = ({ label, value, selected, onOptionClick }) =>
  <li onClick={() => onOptionClick(value)}>
    <div className='checkmark'>
      <Check />
    </div>
    <span>{label}</span>
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
        border: 1px solid #ccc;
        margin-right: .5rem;
      }
    `}</style>
  </li>;

export default SelectOption;