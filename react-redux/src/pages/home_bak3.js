import React, { PureComponent } from 'react'

import { connect } from "react-redux";
import axios from 'axios'

import {
  addAction,
  addBannersAction,
  addRecommendsAction
} from '../store/actionCreator'

class Home extends PureComponent {

  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      const data = res.data.data
      this.props.addBanners(data.banner.list)
      this.props.addRecommends(data.recommend.list)
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数:{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(addAction(1))
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  addBanners(banners) {
    dispatch(addBannersAction(banners))
  },
  addRecommends(recommends) {
    dispatch(addRecommendsAction(recommends))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
