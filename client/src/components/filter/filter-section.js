import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/theme-context';

// FilterSection helps keep different filtering sections within the navbar
// spaced evenly, as well as allowing for a click handler to be attached to
// the entire filter block
const FilterSection = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className='filter-section' onClick={onClick}>
      {children}
      <style jsx>{`
        .filter-section {
          cursor: ${onClick ? 'pointer' : 'inherit'};
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: .5rem 0;
          margin: 0 1rem;
          border-bottom: 1px solid ${theme.borderLight};
        }
      `}</style>
    </div>
  );
}

FilterSection.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
};

FilterSection.defaultProps = {
  children: null,
  onClick: () => {}
}

export default FilterSection;