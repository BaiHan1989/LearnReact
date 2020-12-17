
import React, { useState } from 'react'

export default function MultiStateHook() {

  const [counter, setCounter] = useState(10)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(["txd", "zxf"])

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <h2>我的年龄：{age}</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          }) 
        }
      </ul>
    </div>
  )
}