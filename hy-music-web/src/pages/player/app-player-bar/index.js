import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";

import { getSongDetailAction } from "../store/actionCreators";

import { Slider } from "antd";

import {
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'

export default memo(function YMAppPlayerBar() {

  // 当前时间
  const [currentTime, setcurrentTime] = useState(0)

  // readux hooks
  const { songDetail } = useSelector(state => ({
    songDetail: state.getIn(["player", "songDetail"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // other hooks

  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])


  const imgUrl = (songDetail.al && songDetail.al.picUrl) || ""
  const songName = songDetail && songDetail.name
  const singerName = songDetail.ar && songDetail.ar[0].name
  const duration = songDetail.dt && formatDate(songDetail.dt, "mm:ss")
  const currentDuration = formatDate(currentTime * 1000, "mm:ss")
  const progress = (currentTime * 1000 / songDetail.dt) * 100

  const playMusic = () => {
    audioRef.current.src = getPlaySong(songDetail.id)
    audioRef.current.play()
  }

  const timeUpdate = (e) => {
    setcurrentTime(e.target.currentTime)
  }

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <img src={getSizeImage(imgUrl, 35)} alt="" />
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider value={progress} />
              <div className="time">
                <span className="now-time">{currentDuration}</span>
                <span className="divider">/</span>
                <span className="duration">{duration}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayerBarWrapper>
  )
})
