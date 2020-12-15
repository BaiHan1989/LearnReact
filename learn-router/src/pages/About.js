import React, { PureComponent } from 'react'

import { NavLink, Route, Switch } from "react-router-dom";

function AboutHsitory(props) {
  return <h2>我们公司成立于2012年</h2>
}

function AboutCultrue(props) {
  return <h2>好好学习，天天向上</h2>
}

function AboutContact(props) {
  return <h2>联系电话：010-203244321</h2>
}

export default class About extends PureComponent {
  // 路由的嵌套
  render() {
    return (
      <div>

        <NavLink exact to="/about" activeClassName="about-link">企业历史</NavLink>
        <NavLink to="/about/culture" activeClassName="about-link">企业文化</NavLink>
        <NavLink to="/about/contact" activeClassName="about-link">联系我们</NavLink>

        <Switch>
          <Route exact path="/about" component={AboutHsitory} />
          <Route path="/about/culture" component={AboutCultrue} />
          <Route path="/about/contact" component={AboutContact} />
        </Switch>

      </div>
    )
  }
}
