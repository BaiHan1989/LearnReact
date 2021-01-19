
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