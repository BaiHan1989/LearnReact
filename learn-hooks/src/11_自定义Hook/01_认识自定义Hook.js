import React, { useEffect } from 'react'

const Home = (props) => {
  useLogComponentLife("Home")
  return <h2>Home</h2>
}

const Profile = (props) => {
  useLogComponentLife("Profile")
  return <h2>Profile</h2>
}

export default function CustomHookDemo1() {

  useLogComponentLife("CustomHookDemo1")
  
  return (
    <div>
      <h2>CustomHookDemo1</h2>
      <Home />
      <Profile />
    </div>
  )
}

function useLogComponentLife(name) {
  useEffect(() => {
    console.log(`${name} 组件被创建`)
    return () => {
      console.log(`${name} 组件被销毁`)
    }
  }, [])
}
