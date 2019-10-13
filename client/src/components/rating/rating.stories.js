import React from 'react';
import Rating from './rating';

export default { title: 'Rating' };

export const zeroRating = () => <Rating score={0} />;
export const fractionalRating = () => <Rating score={3.5} />;