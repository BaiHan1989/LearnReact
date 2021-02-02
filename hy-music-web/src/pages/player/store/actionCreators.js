
import { getSongDetail } from "@/services/player"
import * as actionTypes from './constants'

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