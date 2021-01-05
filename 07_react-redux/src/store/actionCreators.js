import { 
  ADD_NUMBER,
  SUB_NUMBER,
  GET_BANNNERS,
  GET_RECOMMENDS
 } from "./constants";

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const getBannersAction = banners => ({
  type: GET_BANNNERS,
  banners
})

export const getRecommendsAction = recommends => ({
  type: GET_RECOMMENDS,
  recommends
})