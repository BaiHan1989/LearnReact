import React, { PureComponent } from 'react'

import { NavLink, Route, Switch } from "react-router-dom";

import { renderRoutes } from "react-router-config";

export function AboutHsitory(props) {
  return <h2>我们公司成立于2012年</h2>
}

export function AboutCultrue(props) {
  return <h2>好好学习，天天向上</h2>
}

export function AboutContact(props) {
  return <h2>联系电话：010-203244321</h2>
}

export function AboutJoin(props) {
  return <h2>简历发送至ssss@qq.com</h2>
}

export default class About extends PureComponent {
  // 路由的嵌套
  render() {
    // console.log(this.props.route)

    return (
      <div>

        <NavLink exact to="/about" activeClassName="about-link">企业历史</NavLink>
        <NavLink to="/about/culture" activeClassName="about-link">企业文化</NavLink>
        <NavLink to="/about/contact" activeClassName="about-link">联系我们</NavLink>
        <button onClick={e => this.joinUs()}>加入我们</button>

        {/* <Switch>
          <Route exact path="/about" component={AboutHsitory} />
          <Route path="/about/culture" component={AboutCultrue} />
          <Route path="/about/contact" component={AboutContact} />
          <Route path="/about/join" component={AboutJoin} />
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }

  joinUs() {
    this.props.history.push("/about/join")
  }
}
