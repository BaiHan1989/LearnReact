import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store'
import { StoreContext } from './utils/context'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
