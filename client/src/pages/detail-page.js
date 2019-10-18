import React from 'react';
import PropTypes from 'prop-types';
import { DetailView } from '../views';

const DetailPage = ({ id }) => (<DetailView id={id}/>);

DetailPage.propTypes = {
  id: PropTypes.string,
}

DetailPage.defaultProps = {
  id: ''
}

export default DetailPage;