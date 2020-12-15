import { PureComponent } from 'react'

import {
  BrowserRouter,
  Link,
  Route,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom'

import About from './pages/about'
import Home from "./pages/home"
import Profile from './pages/profile'
import User from './pages/user'
import NoMatch from './pages/noMatch'
import Product from "./pages/product";

import './App.css'
import Login from './pages/login'

class App extends PureComponent {
  render() {
    return (
      <div>

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
        <button onClick={e => this.showProductList()}>商品列表</button>

        {/* Switch 组件的作用 */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/:id" component={User} /> */}
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
  showProductList() {
    this.props.history.push("/product")
  }
}

export default withRouter(App)