import React, { Component } from 'react'

import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height, names } = props
  return (
    <div>
      <h2>{name + " " + age + " " + height}</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
// 属性类型检查
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}

// 默认属性值
ChildCpn.defaultProps = {
  name: "LaoBai",
  age: 19,
  height: 2.03,
  names: ["aaa", "bbb"]
}

// 类组件的也可以使用static属性类型检查方式
class ChildCpn2 extends Component {
  
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }

  static defaultProps = {
    name: "Yang",
    age: 18
  }

  render() {

    const {name, age} = this.props

    return (
      <div>
        <h2>{name + " " + age}</h2>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="YaoMing" age={40} height={2.26} names={["abc", "cba"]}/>
        <ChildCpn name="Kobe" age={42} height={1.98} names={["nba", "mba"]}/>
        <ChildCpn/>
        <ChildCpn2 age={22}/>
      </div>
    )
  }
}
