import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/constants.js";

import { getHotRecommendsAction } from "../../store/actionCreators";

import YMThemeHeaderRCM from '@/components/theme-header-rcm'

import {
  HotRecommendWrapper
} from './style'

export default memo(function YMHotRecommend() {

  // state

  // redux hooks
  const dispatch = useDispatch()

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <YMThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <div>{item.name}</div>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
