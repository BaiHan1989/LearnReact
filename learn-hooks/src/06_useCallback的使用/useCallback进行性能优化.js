import React, { memo, useCallback, useState } from 'react'

const YMButton = memo((props) => {
  console.log("YMButton 重新渲染" + props.title)
  return <button onClick={props.increment}>+1</button>
})

export default function CallbackHookDemo() {

  console.log("CallbackHookDemo 重新渲染")

  const [count, setCount] = useState(0)
  const [isShow, setIsShow] = useState(true)

  const increment1 = () => {
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>CallbackHookDemo: {count}</h2>
      <YMButton increment={increment1} title="btn1" />
      <YMButton increment={increment2} title="btn2" />
      <button onClick={e => setIsShow(!isShow)}>切换</button>
    </div>
  )
}