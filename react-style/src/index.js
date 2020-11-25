import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_inline-style/01_inline-style'; // 内联样式

// import App from './02_normal-css/app' // 普通样式

// import App from './03_css-module/app' // css-modules 
import App from './04_styled-components/app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
