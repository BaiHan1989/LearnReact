import React, { useEffect, useState } from 'react'
import useDataStore from '../hooks/local-store-hook'

export default function CustomDataStoreHook() {

  const [name, setName] = useDataStore("name")

  return (
    <div>
      <h2>CustomDataStoreHook:{name}</h2>
      <button onClick={e => setName("ym")}>设置name</button>
    </div>
  )
}
