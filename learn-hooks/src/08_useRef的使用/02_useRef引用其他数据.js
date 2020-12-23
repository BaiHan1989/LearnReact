import React, { useEffect, useRef, useState } from 'react'

export default function RefHookDemo2() {

  const [count, setCount] = useState(0)
  const numRef = useRef(count)

  useEffect(() => {
    numRef.current = count
  }, [count])

  return (
    <div>
      {/* <h2>numRef中的数值: {numRef.current}</h2>
      <h2>counter中的数值：{count}</h2> */}
      <h2>上一次count的值:{numRef.current}</h2>
      <h2>当前count的值:{count}</h2>
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}
