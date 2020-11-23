import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {

  // 严格模式识别不推荐使用的生命周期函数
  // UNSAFE_componentWillMount() {
  //   console.log("Home componentWillMount")
  // }

  constructor(props) {
    super(props)
    console.log("Home constructor")
  }

  render() {
    return (
      // 严格模式识别过期的api
      <div ref="title">
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {

  // UNSAFE_componentWillMount() {
  //   console.log("Profile componentWillMount")
  // }

  constructor(props) {
    super(props)
    console.log("Profile constructor")
  }

  render() {
    return (
      <div ref="title">
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}
