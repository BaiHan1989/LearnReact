import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_props';  使用props跨组件通信
// import App from './02_context' 使用context实现跨组件通信
// import App from './03_context-func' 使用context实现跨组件通信-函数组件

// import App from './04_context-func-multiple' // 多个context的使用

import App from './05_event-bus' // 全局事件传递 事件总线

ReactDOM.render(<App />, document.getElementById('root'));
