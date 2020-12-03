import React, { PureComponent } from 'react'

// import CSSTransitionDemo from './transition/CSSTransitionDemo'
import SwitchTransitionDemo from './transition/SwitchTransitionDemo'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <CSSTransitionDemo /> */}
        <SwitchTransitionDemo />
      </div>
    )
  }
}