import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function YMRecommend(props) {
  const { getBanners, topBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      <h2>YMRecommend: {topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispathToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispathToProps)(memo(YMRecommend))

