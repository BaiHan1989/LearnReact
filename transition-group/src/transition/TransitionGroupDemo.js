import React, { PureComponent } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './TransitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      names: ["lily", "lucy", "kobe"]
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              return (
                <CSSTransition
                  key={item}
                  timeout={500}
                  classNames="item"
                >
                  <div>
                    {item}
                    <button onClick={e => this.removeItem(index)}>-</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, "lbj"]
    })
  }

  removeItem(index) {
    this.setState({
      names: this.state.names.filter((item, indey) => {
        return index !== indey
      })
    })
  }
}
