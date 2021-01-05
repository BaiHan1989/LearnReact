import React from 'react'

import { connect } from "react-redux";

import {
  subAction
} from '../store/actionCreators'

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  decrement() {
    dispatch(subAction(1))
  },
  subNumber(num) {
    dispatch(subAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
