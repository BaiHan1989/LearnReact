import React, { Fragment, PureComponent } from 'react';

class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      friends: [
        { name: "姚明", age: 40 },
        { name: "麦迪", age: 41 },
        { name: "科比", age: 42 },
      ]
    }
  }

  render() {
    return (
      // Fragment 为了解决没有必要的展示的节点，又不破坏只有一个根节点的规定
      // <Fragment>
      //   <h2>当前计数:{this.state.counter}</h2>
      //   <button onClick={e => this.increment()}>+1</button>
      // </Fragment>
      // 短语法
      <>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <div>
          {
            this.state.friends.map((item, index) => {
              return (
                // 如果像这种情况数组绑定key的情况下，不能使用短语法了
                <Fragment key={item.name}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr/>
                </Fragment>
              )
            })
          }
        </div>
      </>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}


export default App;