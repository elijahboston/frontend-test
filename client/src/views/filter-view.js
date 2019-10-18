import React from 'react';
import { Filter, Loading, APIError } from '../components';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORIES_QUERY } from '../queries';

const priceOptions = [
  { title: '$', alias: 1 },
  { title: '$$', alias: 2 },
  { title: '$$$', alias: 3 },
  { title: '$$$$', alias: 4 },
];

const FilterView = () => {
  const { error, loading, data } = useQuery(
    CATEGORIES_QUERY
  );
  
  if (loading) return (<Loading />);

  if (error) return (<APIError error={error} />);

  const {
    categories: {
      category: allCategories
    }
  } = data;

  // filter out non-restaurants
  // based on parent category
  const categoryOptions = allCategories
    .filter(category => category.parent_categories
      .filter(parentCategory => parentCategory.alias === 'restaurants').length > 0);
  
  return (
    <div className='filter-view'>
      <Filter priceOptions={priceOptions} categoryOptions={categoryOptions} />
    </div>
  );
}

export default FilterView;