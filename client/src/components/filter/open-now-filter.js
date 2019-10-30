import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import FilterSection from './filter-section';

// OpenNowFilter toggles between showing a filled or empty radio button
// It does this by using border-radius to create a circular div,
// then toggling an SVG within that div based on the 'checked' property
const OpenNowFilter = ({ isChecked, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <FilterSection onClick={onClick}>
      <div className='open-now-toggle'>
        {isChecked && <i className='icon icon-check'></i>}
      </div>
      <span>Open Now</span>
      <style jsx>{`
        span {
          user-select: none;
          color: ${theme.primary};
        }
        .icon {
          color: white;
          font-size: 1rem;
        }
        .open-now-toggle {
          cursor: pointer;
          width: 1rem;
          height: 1rem;
          margin:0 .5rem 0 0;
          background-color: ${isChecked ? 'black' : 'white'};
          border: 1px solid ${isChecked ? 'transparent' : theme.borderLight};
          border-radius: 20rem;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </FilterSection>
  );
}

OpenNowFilter.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func
}

OpenNowFilter.defaultProps = {
  isChecked: false,
  onClick: () => {}
}

export default OpenNowFilter;