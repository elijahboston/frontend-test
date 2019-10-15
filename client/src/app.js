import React from 'react';
import { Router } from '@reach/router';
import { MainView, DetailView } from './views';
import ThemeContext from './theme-context';

const App = () =>
  <div className='app'>
    <ThemeContext.Provider>
      <Router>
        <MainView path="/" />
        <DetailView path="/:slug" />
      </Router>
    </ThemeContext.Provider>
  </div>;

    
export default App;