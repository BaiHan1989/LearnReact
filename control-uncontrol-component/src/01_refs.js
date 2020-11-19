import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.titleEl = null
    this.counterRef = createRef()
  }

  render() {
    return (
      <div>
        {/* ref 接受字符串的方式 */}
        <h2 ref="titleRef">Hello World</h2>
        {/* ref 接受对象的方式 对象通过createRef() 创建 React官方推荐 */}
        <h2 ref={this.titleRef}>Hello World</h2>
        {/* ref 接受回调函数 回调函数传递过来一个参数 */}
        <h2 ref={(arg) => this.titleEl = arg}>Hello World</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <hr/>
        {/* 给组件赋值ref */}
        <Counter ref={this.counterRef} />
        <button onClick={e => this.appIncrement()}>App组件+1</button>
      </div>
    )
  }

  changeText() {
    // console.log(this.refs.titleRef)
    // 修改DOM方式一
    this.refs.titleRef.innerHTML = "Hello React"

    // console.log(this.titleRef.current)
    // 修改DOM方式二
    this.titleRef.current.innerHTML = "Hello JavaScript"

    // console.log(typeof this.titleEl)
    // 修改DOM方式三
    this.titleEl.innerHTML = "Hello TypeScript"
  }

  appIncrement() {
    // console.log(this.counterRef.current);
    this.counterRef.current.increment()
  }
}