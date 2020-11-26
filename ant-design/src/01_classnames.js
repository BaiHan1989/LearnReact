import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isActive: true
    }
  }

  render() {

    const { isActive } = this.state
    const isBar = false
    const errorClass = "error"
    const warnClass = null

    return (
      <div>
        {/* React 原生方式设置class */}
        <h2 className={"foo bar active title"}>我是标题1</h2>
        <h2 className={"title" + (isActive ? " active" : "")}>我是标题2</h2>
        <h2 className={["title", isActive ? "active" : ""].join(" ")}>我是标题3</h2>

        {/* 使用classnames 三方库 设置class */}
        <h2 className={classNames("foo", "bar", "title", "active")}>我是标题4</h2>
        <h2 className={classNames("title", { active: isActive, bar: isBar })}>我是标题5</h2>
        <h2 className={classNames(errorClass, "title")}>我是标题6</h2>
        <h2 className={classNames(warnClass, { active: isActive })}>我是标题7</h2>
        <h2 className={classNames(["title", "foo", { active: isActive }], "bar")}>我是标题8</h2>
      </div>
    )
  }
}