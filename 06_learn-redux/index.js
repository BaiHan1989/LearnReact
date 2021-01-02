// 1. 引入redux

const redux = require('redux')

const initialState = {
  counter: 0
}

// reducer 是一个纯函数
// 根据 action 的 type 来处理 state
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

// 创建store
const store = redux.createStore(reducer)

// store 通过订阅，监听 state 的改变
store.subscribe(() => {
  console.log("counter:" + store.getState().counter)
})

// actions
// action 本质就是一个对象

const action1 = { type: "INCREMENT" }
const action2 = { type: "DECREMENT" }
const action3 = { type: "ADD_NUMBER", num: 5 }
const action4 = { type: "SUB_NUMBER", num: 12 }

// 派发action，就会调用 reducer 函数
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)