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
      <TransitionGroup>
        {
          this.state.names.map((item, index) => {
            return (
              <CSSTransition 
                key={index}
                timeout={500}
                classNames="item"
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        <button onClick={e => this.addName()}>+name</button>
      </TransitionGroup>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, "lbj"]
    })
  }
}
