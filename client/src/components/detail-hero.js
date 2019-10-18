import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from './center-content';
import DetailPhoto from './detail-photo';
const placeholderImg = 'https://picsum.photos/640/228';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const DetailHero = ({ name, address, photos }) =>
  <section className='detail-hero'>
    <CenterContent>
      <div className='details-hero-top'>
        <div className='map'>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}
              &q=${encodeURIComponent(address)}`} allowFullscreen>
          </iframe>
        </div>

        <div className='photos'>
          {photos && photos.map(src => <DetailPhoto key={src} name={name} url={src} />)}
        </div>
      </div>
      <div className='address'>{address}</div>
    </CenterContent>
    <style jsx>{`
      .detail-hero {
        width: 100%;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 2rem 0;
      }

      .details-hero-top {
        display: flex;
        justify-content: left;
        height: 13rem;
      }

      .map {
        width: 50%;
        height: 100%;
      }

      .photos {
        width: 50%;
        display: flex;
        justify-content: left;
      }

      .address {
        margin: 1rem 0 0 0;
      }
    `}</style>
  </section>;

DetailHero.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  photos: PropTypes.array
}

DetailHero.defaultProps = {
  name: '',
  address: '',
  photos: []
}

export default DetailHero;