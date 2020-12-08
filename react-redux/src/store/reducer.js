import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_BANNERS,
  ADD_RECOMMENDS
} from './constance'

// 默认状态
const defaultState = {
  counter: 0,
  banners: [],
  recommends: []
}
// 创建reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case ADD_BANNERS:
      return { ...state, banners: action.banners}
    case ADD_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer