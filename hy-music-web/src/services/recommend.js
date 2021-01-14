import request from './request'

// 请求banner
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

// 请求热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 请求新碟上架
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}
