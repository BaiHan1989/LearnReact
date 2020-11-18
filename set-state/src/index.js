import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_async-update'; // setState 异步更新
// import App from './02_sync-update' // setState 同步更新
import App from './03_immutable-data' // setState 中数据的不可变性

ReactDOM.render(
  <App />,
  document.getElementById('root')
);