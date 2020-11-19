import React, { Component } from 'react'

// 创建Context
const UserContext = React.createContext({
  nickname: "Bob",
  level: 88
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>昵称：{value.nickname}</h2>
              <h2>等级：{value.level}</h2>
            </div>
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
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
