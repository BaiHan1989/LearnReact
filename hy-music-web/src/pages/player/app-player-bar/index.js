import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getSongDetailAction } from "../store/actionCreators";

import { Slider } from "antd";

import { 
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
 } from './style'

export default memo(function YMAppPlayerBar() {

  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <img src="http://p4.music.126.net/6V1CxVDfFu1Q3jIK6bMucg==/109951164418859263.jpg?param=34y34" alt=""/>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name"></span>
              <a href="#/" className="singer-name">王菲</a>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">02:03</span>
                <span className="divider">/</span>
                <span className="duration">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlayerBarWrapper>
  )
})
