import React from 'react'

import { connect } from "react-redux";

import {
  subAction
} from '../store/counter/actionCreators'

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <h1>Banners</h1>
      <ul>
        {
          props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommends</h1>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counterInfo.counter,
  banners: state.homeInfo.banners,
  recommends: state.homeInfo.recommends
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
