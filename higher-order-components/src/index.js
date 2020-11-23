import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_define'; // 高阶组件的定义
// import App from './02_enhance-props' // 高阶组件 - 增加props
// import App from './03_enhance-props' // 高阶组件 - 增加props

// import App from './04_login-auth' // 高阶组件应用 - 登录鉴权
// import App from './05_life-circle' // 高阶组件的应用 - 生命周期劫持

// import App from './06_forward-ref' // forwardRef 高阶组件的使用

// import App from './07_portals' // portals 的使用
// import './index.css'

// import App from './08_fragment' // fragment的使用

import App from './09_strict-mode'

ReactDOM.render(
  <App name="Hello React" />,
  document.getElementById('root')
);