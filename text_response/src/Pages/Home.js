import React from 'react'
import InputBox from '../Components/InputBox'
import '../Styles/Home.css'
import ResponseCard from '../Components/ResponseCard'

function Home() {
  return (
      //use stack
    <div id='container'>Home
    <h1 id='title'>Fun With AI</h1>
    <InputBox id='textbox'/>
    <ResponseCard/>
    </div>
  )
}

export default Home