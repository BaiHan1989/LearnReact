import React, { useEffect, useState } from 'react'

export default function MultiEffectHookDemo() {

  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  // 第二个参数，传入数组，设置依赖，如果有相关依赖才会重新调用回调函数
  useEffect(() => {
    console.log("修改DOM")
  }, [counter])

  useEffect(() => {
    console.log("订阅事件")
  }, [])

  useEffect(() => {
    console.log("网络请求")
  }, [])

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h2>{isLogin ? "ym" : "未登录"}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}
