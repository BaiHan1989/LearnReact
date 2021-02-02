
import { getSongDetail } from "@/services/player"
import * as actionTypes from './constants'
import { getRandomNumber } from "@/utils/math-utils";

const changePlayListAction = playList => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

const changeSongDetailAction = songDetail => ({
  type: actionTypes.CHANGE_SONG_DETAIL,
  songDetail
})

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const sequence = getState().getIn(["player", "sequence"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default: // 顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeSongDetailAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
  }
}

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const getSongDetailAction = (ids) => {

  return (dispatch, getState) => {
    // 查找歌单中是否存在该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)
    
    if (songIndex !== -1) { // 歌单中存在该歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeSongDetailAction(song))
    } else {
      // 歌单中没有该歌曲
      getSongDetail(ids).then(res => {
        // 将歌曲添加到歌单
        const song = res.songs && res.songs[0]
        if (!song) return
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeSongDetailAction(song))
      })
    }
  }
}