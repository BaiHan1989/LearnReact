import React, { PureComponent } from 'react'

import { connect } from "react-redux";

import {
  addAction,
  getHomeMultiDataAction
} from '../store/actionCreator'

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeMultiData()
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
  getHomeMultiData() {
    dispatch(getHomeMultiDataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
