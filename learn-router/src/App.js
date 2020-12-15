import { PureComponent } from 'react'

import {
  BrowserRouter,
  Link,
  Route,
  NavLink
} from 'react-router-dom'

import About from './pages/About'
import Home from "./pages/Home"
import Profile from './pages/Profile'

import './App.css'

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


          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    )
  }
}