import { useState } from 'react'
import Header from "./header/header.jsx"
import styles from './app.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
