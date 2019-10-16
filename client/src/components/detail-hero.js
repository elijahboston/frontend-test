import React from 'react';
import CenterContent from './center-content';

const placeholderImg = 'https://picsum.photos/640/228';

const smallPlaceholderImg = 'https://picsum.photos/225/200';

const DetailHero = ({ address }) =>
  <section className='detail-hero'>
    <CenterContent>
      <div className='details-hero-top'>
        <div className='map'></div>

        <div className='gallery'>
          <img src={smallPlaceholderImg} className='gallery-img' />
          <img src={smallPlaceholderImg} className='gallery-img' />
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
        justify-content: space-between;
      }

      .map {
        width: 50%;
        height: 200px;
        background: url(${placeholderImg}) no-repeat;
      }

      .map img {
        width: 100%;
        height: 200px;
      }

      .gallery {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
      }

      .gallery img {
        margin: 0 0 0 1rem;
      }

      .address {
        margin: 1rem 0 0 0;
      }
    `}</style>
  </section>;

export default DetailHero;