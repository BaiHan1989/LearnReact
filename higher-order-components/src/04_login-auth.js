import React, { PureComponent } from 'react';


function withAuth(WrappedComponent) {
  return props => {
    const { isLogin } = props
    if (isLogin) {
      return <WrappedComponent />
    } else {
      return <LoginPage />
    }
  }
}

class LoginPage extends PureComponent {
  render() {
    return <h2>LoginPage</h2>
  }
}

class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>
  }
}

const AuthCartPage = withAuth(CartPage)

class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false} />
      </div>
    );
  }
}

export default App;