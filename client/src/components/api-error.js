import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts';

const APIError = ({ error }) => {
  const { errorBackground } = useContext(ThemeContext);

  return (
    <div className='error'>
      <div className='error-prompt'>
        <h3>API Error</h3>
        {error.graphQLErrors.map(({ message }) => (
          <span key={message}>{message}</span>
        ))}
      </div>
      <style jsx>{`
        .error {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          background-color: ${errorBackground};
          backdrop-filter: blur(2px);
        }

        .error-prompt {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

APIError.propTypes = {
  error: PropTypes.any,
};

APIError.defaultProps = {
  error: {
    graphQLErrors: () => ([])
  }
};

export default APIError;