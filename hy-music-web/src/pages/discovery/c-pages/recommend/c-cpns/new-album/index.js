import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumsAction } from "../../store/actionCreators";

import YMThemeHeaderRCM from '@/components/theme-header-rcm'

import {
  AlbumWrapper
} from "./style";

export default memo(function YMNewAlbum() {

  // redux hooks

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // 其他hooks 
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <YMThemeHeaderRCM title="新碟上架" />
      {
        newAlbums.map((item, index) => {
          return <div key={item.id}>{item.name}</div>
        })
      }
    </AlbumWrapper>
  )
})
