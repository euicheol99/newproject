import { useState } from 'react'
import './App.css'
import ProfileList from './components/ProfileList'


const list = [{
  name : "정의철",
  age: 20,
  isOnline: 'on'
},{
  name : "박규범",
  age: 22,
  isOnline: 'off'
},{
  name : "양우신",
  age: 23,
  isOnline: 'off'
},{
  name : "허현강",
  age: 24,
  isOnline: 'on'
}]

function App() {

  return (
    <>
      <ProfileList list = {list} />
    </>
  )
}

export default App
