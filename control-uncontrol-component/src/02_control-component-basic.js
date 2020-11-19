import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      username: ""
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* 受控组件 */}
            用户：<input type="text" 
                        id="username" 
                        onChange={e => this.textChange(e)}
                        value={this.state.username}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    // 取消默认提交
    event.preventDefault()
    console.log(this.state.username)
  }

  textChange(event) {
    // console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }
}
