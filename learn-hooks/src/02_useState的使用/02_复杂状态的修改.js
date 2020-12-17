import React, { useState } from 'react'

export default function ComplexStateHook() {

  const [friends, setFriends] = useState(["zxf", "txd"])
  const [students, setStudents] = useState([
    { id: 110, name: "lsj", age: 38 },
    { id: 111, name: "wbg", age: 28 },
    { id: 112, name: "wyj", age: 18 }
  ])

  function incrementAgeWithIndex(index) {
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)
  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, "cyn"])}>添加好友</button>

      <h2>学生列表</h2>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={item.id}>
                <span>姓名：{item.name}</span>
                <span>年龄：{item.age}</span>
                <button onClick={e => incrementAgeWithIndex(index)}>age+1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
