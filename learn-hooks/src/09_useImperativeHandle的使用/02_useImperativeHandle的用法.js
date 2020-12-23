import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const YMInput = forwardRef((props, ref) => {

  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))

  return <input ref={inputRef} type="text"/>
})

export default function ImperativeHookDemo() {

  const inputRef = useRef()

  return (
    <div>
      <YMInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
