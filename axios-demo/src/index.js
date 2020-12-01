import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios'

// 默认配置
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 5000
axios.defaults.headers.common["token"] = "dsajdsaidsaidsa"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);