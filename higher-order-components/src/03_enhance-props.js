import React, { PureComponent, createContext } from 'react'

// 定义高阶组件

function withUser(WrappedComponent) {
  return (props) => {
    return <UserContext.Consumer>
      {
        user => {
          return <WrappedComponent {...props} {...user} />
        }
      }
    </UserContext.Consumer>
  }
}

const UserContext = createContext({
  nickname: "默认",
  age: 0,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return <h2>Home: {`姓名：${this.props.nickname} 年龄：${this.props.age} 区域：${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About: {`姓名：${this.props.nickname} 年龄：${this.props.age} 区域：${this.props.region}`}</h2>
  }
}

const EnhancedHome = withUser(Home)
const EnhancedAbout = withUser(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{nickname: "猴子", age: 20, region: "中国"}}>
          <EnhancedHome />
          <EnhancedAbout />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App