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
import MemoHookDemo1 from './07_useMemo的使用/01_useMemo复杂计算的应用'
import MemoHookDemo2 from './07_useMemo的使用/02_useMemo传入子组件引用类型'
import RefHookDemo1 from './08_useRef的使用/01_useRef引用DOM'
import RefHookDemo2 from './08_useRef的使用/02_useRef引用其他数据'
import ForwarRefDemo from './09_useImperativeHandle的使用/01_回顾forwardRef的用法'
import ImperativeHookDemo from './09_useImperativeHandle的使用/02_useImperativeHandle的用法'
import EffectCountDemo from './10_useLayoutEffect的使用/01_useEffect修改count的值'
import LayoutEffectCountDemo from './10_useLayoutEffect的使用/02_useLayoutEffect修改count的值'
import CustomHookDemo1 from './11_自定义Hook/01_认识自定义Hook'
import CustomContextShareHook from './11_自定义Hook/02_自定义Hook练习-Context共享'
import CustomScrollPositionHook from './11_自定义Hook/03_自定义Hook练习-获取滚动位置'
import CustomDataStoreHook from './11_自定义Hook/04_自定义Hook练习-localStorage存储'

export const UserContext = createContext()
export const TokenContext = createContext()

export const ThemeContext = createContext()

export default function App() {

  const [show, setshow] = useState(true)

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

      {/* <CallbackHookDemo /> */}

      {/* <MemoHookDemo1 /> */}
      {/* <MemoHookDemo2 /> */}

      {/* <RefHookDemo1 /> */}
      {/* <RefHookDemo2 /> */}

      {/* <ForwarRefDemo /> */}
      {/* <ImperativeHookDemo /> */}

      {/* <EffectCountDemo /> */}
      {/* <LayoutEffectCountDemo /> */}

      {/* 自定义Hook */}
      {/* {show && <CustomHookDemo1 />}
      <button onClick={e => setshow(!show)}>切换</button> */}

      {/* <UserContext.Provider value={{name: "ym", age: 18}}>
        <TokenContext.Provider value="ssdsaqe">
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}

      {/* <CustomScrollPositionHook /> */}
      <CustomDataStoreHook />
    </div>
  )
}