// 组件间的嵌套

import React, { Component } from 'react'

// Header
function Header() {
  return <h2>Header组件</h2>
}

// Main

// Banner
function Banner() {
  return <h3>Banner组件</h3>
}

// ProductList
function ProductList() {
  return (
    <ul>
      <li>商品类别1</li>
      <li>商品类别2</li>
      <li>商品类别3</li>
      <li>商品类别4</li>
      <li>商品类别5</li>
    </ul>
  )
}

function Main() {
  return (
    <div>
      <h2>Main组件</h2>
      <Banner/>
      <ProductList/>
    </div>
  )
}

// Footer
function Footer() {
  return <h2>Footer组件</h2>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}