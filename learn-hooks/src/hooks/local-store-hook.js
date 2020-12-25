import { useState, useEffect } from 'react'

function useDataStore(key) {
  
  const [name, setName] = useState(() => {
    const name = JSON.parse(window.localStorage.getItem(key))
    return name
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name))
  }, [name])
  
  return [name, setName]
}

export default useDataStore