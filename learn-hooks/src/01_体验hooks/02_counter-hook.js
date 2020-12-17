import React, { useState } from 'react'

export default function CounterHook() {

  /**
   * useState 
   *  参数：默认值
   *  返回值：数组
   *    第一个元素：state
   *    第二个元素：处理state的函数
   */
  const array = useState(0)
  const state = array[0]
  const setState = array[1]

  return (
    <div>
      <h2>当前计数：{state}</h2>
      <button onClick={e => setState(state + 1)}>+1</button>
      <button onClick={e => setState(state - 1)}>-1</button>
    </div>
  )
}