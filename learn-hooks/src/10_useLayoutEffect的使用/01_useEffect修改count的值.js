import React, { useEffect, useState } from 'react'

export default function EffectCountDemo() {

  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        setCount(Math.random())
      }, 1000);
    }
  }, [count])

  return (
    <div>
      <h2>数字：{count}</h2>
      <button onClick={e => setCount(0)}>修改数字</button>
    </div>
  )
}