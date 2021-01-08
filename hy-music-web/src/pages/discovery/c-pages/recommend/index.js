import React, { memo } from 'react'

import YMTopBanner from './c-cpns/top-banner'
import YMHotRecommend from './c-cpns/hot-recommend'
import YMNewAlbum from './c-cpns/new-album'
import YMRanking from './c-cpns/ranking'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

function YMRecommend(props) {

  return (
    <RecommendWrapper>
      <YMTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <YMHotRecommend />
          <YMNewAlbum />
          <YMRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
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

