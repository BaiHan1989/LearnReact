import {
  ADD_NUMBER,
  SUB_NUMBER
} from './constance'

// 默认状态
const defaultState = {
  counter: 0
}
// 创建reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

export default reducer