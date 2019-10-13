import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ name, url }) =>
  <div className='photo'>
    <img src={url} alt={name} />
    <style jsx>{`
      .photo img {
        max-width: 100%;
        height: auto;
      }
    `}</style>
  </div>;

Photo.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

Photo.defaultProps = {
  name: '',
  url: ''
}

export default Photo;