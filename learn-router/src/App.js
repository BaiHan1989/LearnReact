import { PureComponent } from 'react'

import {
  HashRouter,
  Link,
  Route
} from 'react-router-dom'

import About from './pages/About'
import Home from "./pages/Home"
import Profile from './pages/Profile'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </HashRouter>
      </div>
    )
  }
}