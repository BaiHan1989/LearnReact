import React, { Component } from 'react'

// 创建UserContext
const UserContext = React.createContext({
  nickname: "Bob",
  level: 88
})

// 创建ThemeContext
const ThemeContext = React.createContext({
  color: "black"
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h2 style={{color: theme.color}}>昵称：{value.nickname}</h2>
                      <h2>等级：{value.level}</h2>
                      <h3>颜色：{theme.color}</h3>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  )
}

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nickname: "YaoMing",
      level: 69
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
