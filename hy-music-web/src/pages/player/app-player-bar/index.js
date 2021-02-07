import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";

import { 
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from "../store/actionCreators";

import { NavLink } from "react-router-dom";
import { Slider, message } from "antd";

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
  const { songDetail, sequence, lyricList, currentLyricIndex } = useSelector(state => ({
    songDetail: state.getIn(["player", "songDetail"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)

  const dispatch = useDispatch()

  // other hooks

  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(songDetail.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
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
    const currentTime = e.target.currentTime
    if (!isChanging) {
      // 设置当前时间
      setCurrentTime(currentTime)
      // 设置当前进度
      setProgress(currentTime * 1000 / duration * 100)
    }

    // 切换歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      const lyric = lyricList[i]
      // 如果当前时间小于歌词的时间，匹配到歌词
      if (currentTime * 1000 < lyric.time) {
        break
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        content,
        duration: 0,
        key: "lyric",
        className: "lyric-class"
      })
    }
  }

  const changeMusic = tag => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const changeCurrentSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
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
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
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
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded()} />
    </PlayerBarWrapper>
  )
})
