import React from 'react';
import { Router } from '@reach/router';
import { HomePage, DetailPage } from './pages';
import { ThemeProvider, AppProvider } from './contexts';
import apolloClient from './helpers/apollo-client';
import { ApolloProvider } from 'react-apollo';

const App = () => {
  return (
    <div className='app'>
      <ApolloProvider client={apolloClient}>
        <AppProvider>
          <ThemeProvider>
            <Router>
              <DetailPage path="/:slug/:id" />
              <HomePage path="/" />
            </Router>
          </ThemeProvider>
        </AppProvider>
      </ApolloProvider>
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
    </div>
  );
}

    
export default App;