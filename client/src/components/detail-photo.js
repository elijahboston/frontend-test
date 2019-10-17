import React from 'react';
import PropTypes from 'prop-types';

const DetailPhoto = ({ url }) =>
  <div className='photo'>
    <style jsx>{`
      .photo {
        margin-left: 1rem;
        width: 18rem;
        height: 100%;
        background: url(${url});
        background-size: cover;
      }
    `}</style>
  </div>;

DetailPhoto.propTypes = {
  url: PropTypes.string
}

DetailPhoto.defaultProps = {
  url: ''
}

export default DetailPhoto;