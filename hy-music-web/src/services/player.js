
import request from './request'

/**
 * 获取歌曲详情
 * @param {歌曲id} ids 
 */
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 根据歌曲id 请求歌词
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}