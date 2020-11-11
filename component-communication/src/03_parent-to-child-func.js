import React, { Component } from 'react'

function ChildCpn(props) {

  const { name, age, height } = props

  return (
    <div>
      <h2>{name + " " + age + " " + height}</h2>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="YaoMing" age="40" height="2.26"/>
        <ChildCpn name="Kobe" age="41" height="1.98"/>
      </div>
    )
  }
}
