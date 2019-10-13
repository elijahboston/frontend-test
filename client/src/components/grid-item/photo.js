import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ name, url }) =>
  <div className='photo'>
    <figure alt={name} />
    <style jsx>{`
      .photo figure {
        overflow: hidden;
        height: 0;
        margin: 0;
        padding-top: 70%;
        background: url(${url});
        background-size: cover;
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