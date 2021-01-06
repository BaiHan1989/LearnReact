
import {
  GET_BANNNERS,
  GET_RECOMMENDS
} from './constants'

const initialHomeState = {
  banners: [],
  recommends: []
}

function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case GET_BANNNERS:
      return { ...state, banners: action.banners }
    case GET_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default homeReducer