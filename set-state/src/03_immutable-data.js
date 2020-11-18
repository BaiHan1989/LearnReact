import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      friends: [
        {name: "YaoMing", age: 40},
        {name: "Kobe", age: 42},
        {name: "LBJ", age: 36}
      ]
    }
  }
  // 继承了PureComponent 就不需要再实现shouldComponentUpdate方法了。
  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return <li key={item.name}>{item.name}</li>
            })
          }
        </ul>
        <button onClick={e => this.addFriend()}>添加朋友</button>
      </div>
    )
  }

  addFriend() {
    // 1. 不推荐写法（直接修改state中的数据）为什么不推荐？
    // 在做SCU优化或者继承PureComponent时候，界面不会被更新，因为newState.friends和this.state.friends指向的是同一个对象
    // const friend = {name: "Bob", age: 20}
    // this.state.friends.push(friend)
    // this.setState({
    //   friends: this.state.friends
    // })

    // 2. 推荐写法
    const newFriends = [...this.state.friends]
    const friend = {name: "Bob", age: 20}
    newFriends.push(friend)
    this.setState({
      friends: newFriends
    })
  }
}