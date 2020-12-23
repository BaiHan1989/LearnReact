import React, { useRef } from 'react'

class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>
  }
}

export default function RefHookDemo1() {

  const titleRef = useRef()
  const inputRef = useRef()
  const testCpnRef = useRef()

  function changeDOM() {
    titleRef.current.innerHTML = "Hello React"
    inputRef.current.focus()
    console.log(testCpnRef.current)
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo1</h2>
      <input ref={inputRef} type="text"/>
      <TestCpn ref={testCpnRef} />
      <button onClick={e => changeDOM()}>修改DOM</button>
    </div>
  )
}