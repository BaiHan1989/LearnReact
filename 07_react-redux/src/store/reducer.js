import {
  ADD_NUMBER,
  SUB_NUMBER,
  GET_BANNNERS,
  GET_RECOMMENDS
} from './constants'

const defaultState = {
  counter: 0,
  banners: [],
  recommends: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case GET_BANNNERS:
      return { ...state, banners: action.banners }
    case GET_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer