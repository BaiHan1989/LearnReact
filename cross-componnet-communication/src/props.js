
// 属性实现跨组件通信，一层层属性传递

import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h2>昵称：{props.nickname}</h2>
      <h2>等级：{props.level}</h2>
    </div>
  )
}

function Profile(props) {

  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      {/* 属性展开 */}
      <ProfileHeader {...props}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nickname: "YaoMing",
      level: 88
    }
  }

  render() {
    // const { nickname, level } = this.state
    return (
      <div>
        {/* <Profile nickname={nickname} level={level}/> */}
        <Profile {...this.state} />
      </div>
    )
  }
}

