import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App：{this.props.name}
      </div>
    )
  }
}

// 返回类组件
function higherOrderComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  NewComponent.displayName = "HigherOrderCpn"

  return NewComponent
}

// 返回函数组件
function higherOrderComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props}/>
  }

  NewComponent.displayName = "HigherOrderCpn2"
  return NewComponent
}

const EnhancedComponent = higherOrderComponent2(App)

export default EnhancedComponent