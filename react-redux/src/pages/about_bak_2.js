import React from 'react'

import connect from '../utils/connect'

import {
  subAction
} from '../store/actionCreator'

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

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement() {
      dispatch(subAction(1))
    },
    subNumber(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)