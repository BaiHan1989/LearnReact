import React, { PureComponent } from 'react'


function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 记录渲染组件的开始时间
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }

    // 记录渲染组件的结束时间
    componentDidMount() {
      this.endTime = Date.now()
      const interval = this.endTime - this.beginTime
      console.log(`${WrappedComponent.name}组件渲染时间为${interval}`)
    }

    render() {
      return <WrappedComponent />
    }
  }
}


class Home extends PureComponent {

  render() {
    return <h2>Home</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>
  }
}

const TimeHome = withRenderTime(Home)
const TimeAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
        <TimeAbout />
      </div>
    )
  }
}