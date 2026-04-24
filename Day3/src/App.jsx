
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    title: "Data Structures",
    desc: "Ways of organizing data (arrays, linked lists, trees, graphs) to enable efficient access and modification."
  }
  let myObj1 = {
    title: "React",
    desc: "Ways of organizing data (arrays, linked lists, trees, graphs) to enable efficient access and modification."
  }
  return (
    <>
      <Card user={myObj.title} detail={myObj.desc} />
      <Card user={myObj1.title} detail={myObj1.desc} />
    </>
  )
}

export default App
