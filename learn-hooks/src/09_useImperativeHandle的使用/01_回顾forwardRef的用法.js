import React, { forwardRef, useRef } from 'react'

const YMInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text"/>
})

export default function ForwarRefDemo() {

  const inputRef = useRef()

  return (
    <div>
      <YMInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
