
import { reducer as counterReducer } from './counter'
import { reducer as homeReducer } from './home'

import { combineReducers } from 'redux'

// 创建reducer
// const reducer = (state = {}, action) => {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action)
//   }
// }

// 合并reducer
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

export default reducer