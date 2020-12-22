import React, { createContext, Profiler, useState } from 'react'

import CounterClass from './01_体验hooks/01_counter-class'
import CounterHook from './01_体验hooks/02_counter-hook'
import CounterHook2 from './01_体验hooks/03_counter-hook'

import MultiStateHook from './02_useState的使用/01_多个状态的使用'
import ComplexStateHook from './02_useState的使用/02_复杂状态的修改'

import ClassCounterChangeTitle from './03_useEffect的使用/01_class实现title的修改'
import HookCounterChangeTitle from './03_useEffect的使用/02_useEffect的hook实现title的修改'
import EffectHookCancelDemo from './03_useEffect的使用/03_useEffect模拟订阅和取消订阅'
import MultiEffectHookDemo from './03_useEffect的使用/04_多个useEffect一起使用'

import ContextHookDemo from './04_useContext的使用/useContext的使用'
import HomeReducer from './05_useReducer的使用/home'
import ProfileReducer from './05_useReducer的使用/profile'
import CallbackHookDemo from './06_useCallback的使用/useCallback进行性能优化'

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {

  // const [show, setshow] = useState(true)

  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook2 /> */}

      {/* <MultiStateHook /> */}
      {/* <ComplexStateHook /> */}

      {/* <ClassCounterChangeTitle /> */}
      {/* <HookCounterChangeTitle /> */}

      {/* {show && <EffectHookCancelDemo />}
      <button onClick={e => setshow(!show)}>切换</button> */}

      {/* <MultiEffectHookDemo /> */}

      {/* <UserContext.Provider value={{name: "ym", age:18}}>
        <ThemeContext.Provider value={{fontSize: "30px", color: "red"}}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <HomeReducer />
      <ProfileReducer /> */}

      <CallbackHookDemo />
    </div>
  )
}