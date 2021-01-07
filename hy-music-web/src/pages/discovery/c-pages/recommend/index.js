import React, { memo, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function YMRecommend(props) {

  // redux 和 组件关联：获取数据和进行操作
  const dispatch = useDispatch()

  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>YMRecommend:{topBanners.length}</h2>
    </div>
  )
}

export default memo(YMRecommend)

// function YMRecommend(props) {
//   const { getBanners, topBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>YMRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispathToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispathToProps)(memo(YMRecommend))

