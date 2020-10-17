import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //<React.StrictMode> temporary fix for bootstrap warnings
    <App />
  //</React.StrictMode>
  ,
  document.getElementById('root')
);