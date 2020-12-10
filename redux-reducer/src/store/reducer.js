
import { reducer as counterReducer } from './counter'
import { reducer as homeReducer } from './home'

// 创建reducer
const reducer = (state = {}, action) => {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}

export default reducer