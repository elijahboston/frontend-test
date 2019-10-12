import browserEnv from 'browser-env';

// browserEnv uses jsdom to create a mock browser environment.
// Here we specify what browser components we want to mock globally
browserEnv(['window', 'document', 'navigator']);