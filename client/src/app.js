import React from 'react';
import { Router } from '@reach/router';
import { HomePage, DetailPage } from './pages';
import { ThemeProvider, AppProvider } from './contexts';
import apolloClient from './helpers/apollo-client';
import { ApolloProvider } from 'react-apollo';
import './css/global.css'; // eslint-disable-line import/no-unassigned-import
import './css/app-icons.css'; // eslint-disable-line import/no-unassigned-import

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
    </div>
  );
}

    
export default App;