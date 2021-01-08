import React, { memo } from 'react'

import YMThemeHeaderRCM from '@/components/theme-header-rcm'  

import { RankingWrapper } from "./style";

export default memo(function YMRanking() {
  return (
    <RankingWrapper>
      <YMThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  )
})
