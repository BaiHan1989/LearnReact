import React from 'react';
import ReactDOM from 'react-dom';
// import App from './props';  使用props跨组件通信
// import App from './context' 使用context实现跨组件通信
// import App from './context-func' 使用context实现跨组件通信-函数组件

import App from './context-func-multiple' // 多个context的使用

ReactDOM.render(<App />, document.getElementById('root'));
