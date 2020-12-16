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
import Product from "./pages/product"
import Detail from './pages/detail'
import Detail2 from './pages/detail2'
import Detail3 from './pages/detail3'
import Login from './pages/login'

import './App.css'

import routes from './router'
import { renderRoutes } from "react-router-config";

class App extends PureComponent {
  render() {
    const id = "666"
    const info = {name: "ym", age: 18}

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
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
        <NavLink to={`/detail2?name=ym&age=18`} activeClassName="link-active">详情2</NavLink>
        <NavLink
          to={{
            pathname: "/detail3",
            search: "?name=abc",
            state: info
          }}
          activeClassName="link-active">
          详情3
        </NavLink>
        <button onClick={e => this.showProductList()}>商品列表</button>

        {/* Switch 组件的作用 */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}

        {renderRoutes(routes)}
      </div>
    )
  }
  showProductList() {
    this.props.history.push("/product")
  }
}

export default withRouter(App)