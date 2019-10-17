import React, { useContext } from 'react';
import { Header, CenterContent } from '../components';
import { AppContext } from '../contexts';
import SearchView from './search-view';
import FilterView from './filter-view';

import { mockTitle, mockDescription } from '../storybook-helpers/_mock-data';

const MainView = () => {
  const {
    openNow,
    pricesSelected,
    categoriesSelected
  } = useContext(AppContext);

  return (
    <main>
      <Header title={mockTitle} description={mockDescription} />
      <FilterView />
      <CenterContent>
        <h2>All Restaurants</h2>
      </CenterContent>
      <SearchView categories={categoriesSelected} price={pricesSelected} isOpen={openNow} />
      <style jsx>{`
        .load-more {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </main>
  );
}

export default MainView;