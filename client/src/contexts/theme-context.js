import React from 'react';

const ThemeContext = React.createContext({});

const theme = {
  primary: '#002B56',
  buttonText: '#fff',
  open: '#00E8A4',
  closed: '#FF3548',
  fontLight: '#757575',
  borderLight: '#C8C8C8'
};

export const ThemeProvider = ({ children }) =>
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>;

export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;