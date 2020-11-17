import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movies: ["金刚川", "八佰"]
    }
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button onClick={e => this.addMovie()}>添加电影</button>
      </div>
    )
  }

  addMovie() {
    // 如果在数组的最后的位置添加数据，不会造成性能问题
    // this.setState({
    //   movies: [...this.state.movies, "我的团长我的团"]
    // })

    // 如果在数组的最前面插入数据，不添加key，默认情况下，React会逐条进行比较，会产生多个mutation，性能低
    // 如果添加了唯一key，React就可以根据key来进行比较是否为同一元素，会对key相同的元素进行复用，提高性能
    this.setState({
      movies: ["我的团长我的团", ...this.state.movies]
    })
  }
}