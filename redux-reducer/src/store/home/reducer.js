import {
  ADD_BANNERS,
  ADD_RECOMMENDS
} from './constance'

// 拆分homeReducer
const initialHomeState = {
  banners: [],
  recommends: []
}

const homeReducer = (state = initialHomeState, action) => {
  switch (action.type) {
    case ADD_BANNERS:
      return { ...state, banners: action.banners}
    case ADD_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default homeReducer