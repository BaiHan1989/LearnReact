import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      fruit: "orange"
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name="fruit" 
                  onChange={e => this.handleChange(e)}
                  value={this.state.fruit}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    // 取消默认提交
    event.preventDefault()
    console.log(this.state.fruit)
  }

  handleChange(event) {
    this.setState({
      fruit: event.target.value
    })
  }
}
