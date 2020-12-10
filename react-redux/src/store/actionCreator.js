
import axios from 'axios'

import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_BANNERS,
  ADD_RECOMMENDS,
  FETCH_HOME_MULTIDATA
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

export const getHomeMultiDataAction = (dispatch) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    const data = res.data.data
    dispatch(addBannersAction(data.banner.list))
    dispatch(addRecommendsAction(data.recommend.list))
  })
  
}

export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}