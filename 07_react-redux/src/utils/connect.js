import { PureComponent } from "react"

import store from '../store'

export function connect(mapStatesToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {

      constructor(props) {
        super(props)

        this.state = {
          storeState: mapStatesToProps(store.getState())
        }
      }

      componentDidMount() {
        store.subscribe(() => {
          this.setState({
            storeState: mapStatesToProps(store.getState())
          })
        })
      }

      render() {
        return <WrappedComponent
                 {...this.props}
                 {...mapStatesToProps(store.getState())}
                 {...mapDispatchToProps(store.dispatch)}
               />
      }
    }
  }
}