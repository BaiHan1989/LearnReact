
import axios from 'axios'

import {
  GET_BANNNERS,
  GET_RECOMMENDS
} from "./constants";

export const getBannersAction = banners => ({
  type: GET_BANNNERS,
  banners
})

export const getRecommendsAction = recommends => ({
  type: GET_RECOMMENDS,
  recommends
})

// redux-thunk 发送网络请求
export const getHomeMultidataAction = (dispatch) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    const data = res.data.data
    dispatch(getBannersAction(data.banner.list))
    dispatch(getRecommendsAction(data.recommend.list))
  })
}