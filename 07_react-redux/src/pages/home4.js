import React, { PureComponent } from 'react'

import { connect } from "react-redux";

import { 
  addAction,
  getHomeMultidataAction
 } from "../store/actionCreators";

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeMultidata()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchProps = dispatch => ({
  increment() {
    dispatch(addAction(1))
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  getHomeMultidata() {
    dispatch(getHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Home)
