import React, { PureComponent, memo } from 'react'

// memo 对函数组件进行性能优化，防止没必要的渲染

// Header
const MemoHeader = memo(function Header(props) {
  console.log("Header被调用")
  return <h2>Header</h2>
})

// Main

class Banner extends PureComponent {
  render() {
    console.log("Banner的render函数被调用")
    return <h2>Banner</h2>
  }
}

function ProductList() {
  console.log("ProductList被调用")
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

class Main extends PureComponent {
  render() {
    console.log("Main的render函数被调用")
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    )
  }
}

// Footer
const MemoFooter = memo(function Footer() {
  console.log("Footer被调用")
  return <h2>Footer</h2>
})

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    console.log("App的render函数被调用")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <MemoHeader />
        <Main />
        <MemoFooter />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}