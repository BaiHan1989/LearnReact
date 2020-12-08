
import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_BANNERS,
  ADD_RECOMMENDS
} from './constance'

export const addAction = (num) => {
  return {
    type: ADD_NUMBER,
    num
  }
}

export const subAction = (num) => {
  return {
    type: SUB_NUMBER,
    num
  }
}

export const addBannersAction = (banners) => ({
  type: ADD_BANNERS,
  banners
})

export const addRecommendsAction = (recommends) => ({
  type: ADD_RECOMMENDS,
  recommends
})