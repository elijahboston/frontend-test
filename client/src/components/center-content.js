import React from 'react';
import PropTypes from 'prop-types';

// CenterContent helps us handle keeping out main content areas
// centered and horizontal margins consistent
const CenterContent = ({ children }) =>
  <div className='center-content'>
    <div className='container'>
      {children}
    </div>
    <style jsx>{`
      .center-content {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      .container {
        width: 100%;
        max-width: 980px;
      }

      @media only screen and (max-width: 980px) {
        .container {
          margin: 0 1rem;
        }
      }
    `}</style>
  </div>

CenterContent.propTypes = {
  children: PropTypes.any
};

CenterContent.defaultProps = {
  children: null
};

export default CenterContent;