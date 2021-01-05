import React, { PureComponent } from "react"

import { StoreContext } from './context'

export function connect(mapStatesToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {

      constructor(props, context) {
        super(props, context)

        this.state = {
          storeState: mapStatesToProps(context.getState())
        }
      }

      componentDidMount() {
        this.context.subscribe(() => {
          this.setState({
            storeState: mapStatesToProps(this.context.getState())
          })
        })
      }

      render() {
        return <WrappedComponent
          {...this.props}
          {...mapStatesToProps(this.context.getState())}
          {...mapDispatchToProps(this.context.dispatch)}
        />
      }
    }
    EnhanceComponent.contextType = StoreContext

    return EnhanceComponent
  }
}