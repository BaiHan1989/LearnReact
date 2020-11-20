import React, { PureComponent } from 'react'


class Home extends PureComponent {
  render() {
    return <h2>{`姓名：${this.props.nickname} 年龄：${this.props.age} 区域：${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>{`姓名：${this.props.nickname} 年龄：${this.props.age} 区域：${this.props.region}`}</h2>
  }
}
// 定义高阶组件
function enhanceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="中国" />
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="YaoMing" age={40} />
        <EnhanceAbout nickname="LiuXin" age={30} />
      </div>
    )
  }
}

export default App