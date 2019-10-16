import React from 'react';

const ThemeContext = React.createContext({
  primary: '#002B56',
  buttonText: '#fff',
  open: '#00E8A4',
  closed: '#FF3548',
  fontLight: '#757575',
  borderLight: '#C8C8C8'
});

export default ThemeContext;