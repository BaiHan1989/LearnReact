import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_define'; // 高阶组件的定义
// import App from './02_enhance-props' // 高阶组件 - 增加props
// import App from './03_enhance-props' // 高阶组件 - 增加props

import App from './04_login-auth' // 高阶组件应用 - 登录鉴权

ReactDOM.render(
  <App name="Hello React" />,
  document.getElementById('root')
);