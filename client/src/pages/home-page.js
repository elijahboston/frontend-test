import React, { useContext } from 'react';
import { Header, CenterContent } from '../components';
import { AppContext } from '../contexts';
import { FilterView, GridView } from '../views';

import { mockTitle, mockDescription } from '../storybook-helpers/_mock-data';

const HomePage = () => {
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
      <GridView categories={categoriesSelected} price={pricesSelected} isOpen={openNow} />
      <style jsx>{`
        .load-more {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </main>
  );
}

export default HomePage;