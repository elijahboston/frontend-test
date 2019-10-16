import React from 'react';
import { Router } from '@reach/router';
import { MainView, DetailView } from './views';
import { ThemeProvider } from './theme-context';

const theme = {
  primary: '#002B56',
  buttonText: '#fff',
  open: '#00E8A4',
  closed: '#FF3548',
  fontLight: '#757575',
  borderLight: '#C8C8C8'
};

const App = () =>
  <div className='app'>
    <ThemeProvider value={theme}>
      <Router>
        <DetailView path="/:slug" />
        <MainView path="/" />
      </Router>
    </ThemeProvider>
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
        font-family: 'Helvetica Neue', san-serif;
      }
      
      h1, h2 {
        font-weight: lighter;
      }
    `}</style>
  </div>;

    
export default App;