import React, { useState } from "react"

export default function CounterHook() {

  // const [counter, setCounter] = useState(0)

  // useState的参数也可以传入函数
  const [counter, setCounter] = useState(() => 0)

  function handleBtnClick() {
    // 传入参数不是函数，会做合并操作
    // setCounter(counter + 10)
    // setCounter(counter + 10)
    // setCounter(counter + 10)
    // setCounter(counter + 10)

    // 传入的参数是函数，不会被合并
    setCounter((prevCounter) => prevCounter + 10)
    setCounter((prevCounter) => prevCounter + 10)
    setCounter((prevCounter) => prevCounter + 10)
    setCounter((prevCounter) => prevCounter + 10)
  }

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter((prevCounter) => prevCounter + 10)}>+10</button>
      <button onClick={handleBtnClick}>+40</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
    </div>
  )
}