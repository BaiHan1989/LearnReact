
import { Map } from "immutable";

import * as actionTypes from "./constants"

const defaultState = Map({
  songDetail: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_DETAIL:
      return state.set("songDetail", action.songDetail)
    default:
      return state
  }
}

export default reducer