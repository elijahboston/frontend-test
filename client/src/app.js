import React from 'react';
import { Router } from "@reach/router";
import { MainView, DetailView } from './views'

const App = () =>
  <div>
    <Router>
      <MainView path="/" />
      <DetailView path="/:slug" />
    </Router>
  </div>;

    
export default App;