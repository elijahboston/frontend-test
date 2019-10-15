import React from 'react';
import CenterContent from './center-content';
import MapImg from './map-placeholder.png';

const DetailHero = ({ address }) =>
  <section className='detail-hero'>
    <CenterContent>
      <div className='scroller'>
        <img src={MapImg} className='map' />
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

      .scroller {
        height: 200px;
        background: #ccc;
        width: 100%;
      }
      
      .map {
        height: 100%;
      }

      .address {
        margin: 1rem 0 0 0;
      }
    `}</style>
  </section>;

export default DetailHero;