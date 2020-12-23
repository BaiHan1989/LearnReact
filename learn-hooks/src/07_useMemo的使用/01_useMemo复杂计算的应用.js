import React, { useState, useMemo } from 'react'

function caculate(count) {

  console.log("caculate 重新计算")
  let total = 0
  for (let i = 0; i <= count; i++) {
    total += i
  }

  return total
}

export default function MemoHookDemo1() {

  console.log("MemoHookDemo1 重新渲染")
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  const total = useMemo(() => {
    return caculate(count)
  }, [count])

  return (
    <div>
      <h2>MemoHookDemo1: {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}