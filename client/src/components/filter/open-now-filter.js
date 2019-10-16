import React, { useContext } from 'react';
import ThemeContext from '../../theme-context';
import FilterSection from './filter-section';
import Dot from '../svg/dot';

// OpenNowFilter toggles between showing a filled or empty radio button
// It does this by using border-radius to create a circular div,
// then toggling an SVG within that div based on the 'checked' property
const OpenNowFilter = ({ checked, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <FilterSection onClick={onClick}>
      <div className='open-now-toggle'>
        {checked && <Dot width='.5rem' height='.5rem' fill={theme.primary} />}
      </div>
      <span>Open Now</span>
      <style jsx>{`
        .open-now-toggle {
          width: 1rem;
          height: 1rem;
          margin:0 .5rem 0 0;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 20rem;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </FilterSection>
  );
}


export default OpenNowFilter;