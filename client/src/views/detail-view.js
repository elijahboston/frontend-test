import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const DetailView = ({ slug }) =>
  <main>
    <h1>Detail View</h1>
    <p>{slug}</p>
    <Link to='/'>Back</Link>
  </main>;

DetailView.propTypes = {
  slug: PropTypes.string
}

DetailView.defaultProps = {
  slug: ''
}

export default DetailView;