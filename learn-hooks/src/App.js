import React from 'react'

import CounterClass from './01_体验hooks/01_counter-class'
import CounterHook from './01_体验hooks/02_counter-hook'
import CounterHook2 from './01_体验hooks/03_counter-hook'

// import MultiStateHook from './02_useState的使用/01_多个状态的使用'
import ComplexStateHook from './02_useState的使用/02_复杂状态的修改'

export default function App() {
  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook2 /> */}

      {/* <MultiStateHook /> */}
      <ComplexStateHook />
    </div>
  )
}