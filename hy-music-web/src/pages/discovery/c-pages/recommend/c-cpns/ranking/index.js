import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopRankingAction } from "../../store/actionCreators";

import YMThemeHeaderRCM from '@/components/theme-header-rcm'
import YMTopRanking from '@/components/top-ranking'

import { RankingWrapper } from "./style";

export default memo(function YMRanking() {

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopRankingAction(0))
    dispatch(getTopRankingAction(2))
    dispatch(getTopRankingAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <YMThemeHeaderRCM title="榜单" />
      <div className="tops">
        <YMTopRanking info={upRanking} />
        <YMTopRanking info={newRanking} />
        <YMTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
