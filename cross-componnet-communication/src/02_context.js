import React, { Component } from 'react'


// 创建Context,设置默认值
const UserContext = React.createContext({
  nickname: "Bai",
  level: 30
})

class ProfileHeader extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        <h2>昵称：{this.context.nickname}</h2>
        <h2>等级：{this.context.level}</h2>
      </div>
    )
  }
}
// 将UserContext赋值给组件
ProfileHeader.contextType = UserContext

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
      level: 89
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