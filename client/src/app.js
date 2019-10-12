import React from 'react';

const App = () =>
  <div>
    <p data-testid='initial-content'>Hello World</p>
    <style jsx>{`
      p {
          color: red;
      }
    `}</style>
  </div>;
  
export default App;