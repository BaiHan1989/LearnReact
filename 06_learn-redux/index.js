
import store from './store/index.js'

import {
  addAction,
  subAction,
  incAction,
  decAction
} from './store/actionCreators.js'

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addAction(5))
store.dispatch(subAction(10))
store.dispatch(incAction())
store.dispatch(decAction())
