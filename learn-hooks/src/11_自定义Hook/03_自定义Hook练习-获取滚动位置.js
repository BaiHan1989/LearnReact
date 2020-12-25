import React, { useEffect, useState } from 'react'
import useScrollPosition from '../hooks/scroll-position-hook'

export default function CustomScrollPositionHook() {

  const scrollPosition = useScrollPosition()

  return (
    <div style={{padding: "1000px 0"}}>
      <h2 style={{position: "fixed", left: "0", top: "0"}}>CustomScrollPositionHook:{scrollPosition}</h2>
    </div>
  )
}
