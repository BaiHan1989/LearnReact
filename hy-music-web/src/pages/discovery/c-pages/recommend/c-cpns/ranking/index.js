import React, { memo, useEffect } from 'react'

import { useDispatch } from "react-redux";

import { getTopRankingAction } from "../../store/actionCreators";

import YMThemeHeaderRCM from '@/components/theme-header-rcm'  

import { RankingWrapper } from "./style";

export default memo(function YMRanking() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopRankingAction(0))
    dispatch(getTopRankingAction(2))
    dispatch(getTopRankingAction(3))
  }, [dispatch])
  
  return (
    <RankingWrapper>
      <YMThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  )
})
