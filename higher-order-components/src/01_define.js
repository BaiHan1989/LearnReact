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

function higherOrderComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  NewComponent.displayName = "HigherOrderCpn"

  return NewComponent
}

const EnhancedComponent = higherOrderComponent(App)

export default EnhancedComponent