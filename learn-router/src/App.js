import { PureComponent } from 'react'

import {
  BrowserRouter,
  Link,
  Route,
  NavLink
} from 'react-router-dom'

import About from './pages/about'
import Home from "./pages/home"
import Profile from './pages/profile'
import User from './pages/user'
import NoMatch from './pages/noMatch'

import './App.css'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Login from './pages/login'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

          {/* activeStyle */}
          {/* <NavLink exact to="/" activeStyle={{ color: "red", fontSize: "30px" }}>首页</NavLink>
          <NavLink to="/about" activeStyle={{ color: "red", fontSize: "30px" }}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{ color: "red", fontSize: "30px" }}>我的</NavLink> */}

          {/* 自定义激活状态类名 */}
          <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
          <NavLink to="/about" activeClassName="link-active">关于</NavLink>
          <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
          <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
          <NavLink to="/user" activeClassName="link-active">用户</NavLink>

          {/* Switch 组件的作用 */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/:id" component={User} /> */}
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}