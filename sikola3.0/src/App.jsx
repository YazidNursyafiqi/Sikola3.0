import { useState } from 'react'
import Header from "./header/header.jsx"
import styles from './app.module.css'

//container:
import Navbar from './container/navbar/main_navbar.jsx';
import Content from './container/content/main_content.jsx';

function App() {
  return(
    <>
      <Header/>
      <div id={styles.main_container}>
        <Navbar/>
        <Content/>
      </div>
    </>
  )
}

export default App
