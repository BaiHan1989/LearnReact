import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";

import { 
  getSongDetailAction,
  changeSequenceAction
} from "../store/actionCreators";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";

import {
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'

export default memo(function YMAppPlayerBar() {

  // 当前时间
  const [currentTime, setCurrentTime] = useState(0)

  // 进度
  const [progress, setProgress] = useState(0)

  // 是否正在改变进度
  const [isChanging, setIsChanging] = useState(false)

  // 是否正在播放
  const [isPlaying, setIsPlaying] = useState(false)

  // readux hooks
  const { songDetail, sequence } = useSelector(state => ({
    songDetail: state.getIn(["player", "songDetail"]),
    sequence: state.getIn(["player", "sequence"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // other hooks

  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(songDetail.id)
  }, [songDetail])

  const imgUrl = (songDetail.al && songDetail.al.picUrl) || ""
  const songName = songDetail && songDetail.name
  const singerName = songDetail.ar && songDetail.ar[0].name
  const duration = songDetail && songDetail.dt
  const currentDuration = formatDate(currentTime * 1000, "mm:ss")

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    if (!isChanging) {
      // 设置当前时间
      setCurrentTime(e.target.currentTime)
      // 设置当前进度
      setProgress(currentTime * 1000 / duration * 100)
    }
  }

  const changeCurrentSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  // 滑块滑动时调用
  const sliderChange = useCallback((value) => {
    // 修改进度值
    setProgress(value)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime / 1000)
    setIsChanging(true)
  }, [duration])

  // 松开鼠标时调用
  const afterChange = useCallback((value) => {

    // 设置当前播放时间
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime)
    setIsChanging(false)

    // 如果是暂停状态继续播放
    if (!isPlaying) {
      playMusic()
    }

  }, [duration, isPlaying, playMusic])

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(imgUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={afterChange}
              />
              <div className="time">
                <span className="now-time">{currentDuration}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDate(duration, "mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeCurrentSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayerBarWrapper>
  )
})
