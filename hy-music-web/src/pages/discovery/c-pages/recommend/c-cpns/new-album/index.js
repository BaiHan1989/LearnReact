import React, { memo, useEffect, useRef } from 'react'

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumsAction } from "../../store/actionCreators";

import { Carousel } from 'antd'
import YMThemeHeaderRCM from '@/components/theme-header-rcm'
import YMAlbumCover from '@/components/album-cover'

import { AlbumWrapper } from "./style";

export default memo(function YMNewAlbum() {

  // redux hooks

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // 其他hooks 

  const pageRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <YMThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={pageRef} dots={false}>
            {
              [0, 1].map((item, index) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                        return (
                          <YMAlbumCover 
                            key={iten.id} 
                            info={iten} 
                            size={100} 
                            width={118} 
                            bgp="-570px"
                          />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
