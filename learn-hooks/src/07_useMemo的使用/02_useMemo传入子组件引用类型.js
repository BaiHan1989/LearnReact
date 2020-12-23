import React, { memo, useState, useMemo } from 'react'

const YMInfo = memo((props) => {
  console.log("YMInfo 重新渲染")
  return <h2>名字：{props.info.name}, 年龄：{props.info.age}</h2>
})

export default function MemoHookDemo2() {

  console.log("MemoHookDemo2 重新渲染")
  const [show, setShow] = useState(true)
  // const info = { name: "ym", age: 18 }

  const info = useMemo(() => {
    return { name: "ym", age: 18 }
  }, [])

  return (
    <div>
      <YMInfo info={info} />
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
