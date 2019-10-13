import React from 'react';
import { Router } from "@reach/router";
import { MainView, DetailView } from './views'
const App = () =>
  <div>
    <Router>
      <MainView path="/" />
      <DetailView path="/details" />
    </Router>
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </div>;

    
export default App;