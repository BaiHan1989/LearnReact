import React from 'react';
import ReactDOM from 'react-dom';
// import App from './async-update'; // setState 异步更新
import App from './sync-update' // setState 同步更新

ReactDOM.render(
  <App />,
  document.getElementById('root')
);