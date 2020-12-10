import {
  ADD_NUMBER,
  SUB_NUMBER,
} from './constance'

// 拆分counterReducer
const initialCounterState = {
  counter: 0
}
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

export default counterReducer