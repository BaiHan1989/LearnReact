
// 引入redux

const redux = require("redux")

// 初始状态
const initialState = {
  counter: 0
}

// 创建reducer
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

// 订阅
store.subscribe(() => {
  console.log("当前计数：",store.getState().counter)
})

// 创建action
const action1 = { type: "INCREMENT" }
const action2 = { type: "DECREMENT" }
const action3 = { type: "DECREMENT" }
const action4 = { type: "ADD_NUMBER", num: 5 }
const action5 = { type: "SUB_NUMBER", num: 12 }

// 派发
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
store.dispatch(action5)

