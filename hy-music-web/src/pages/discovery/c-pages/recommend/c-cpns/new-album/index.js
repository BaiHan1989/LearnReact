import React, { memo } from 'react'

import YMThemeHeaderRCM from '@/components/theme-header-rcm'

import { 
  AlbumWrapper
 } from "./style";

export default memo(function YMNewAlbum() {
  return (
    <AlbumWrapper>
      <YMThemeHeaderRCM title="新碟上架" />
    </AlbumWrapper>
  )
})
