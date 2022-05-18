import React from 'react'
import InputBox from '../Components/InputBox'
import '../Styles/Home.css'
import ResponseCard from '../Components/ResponseCard'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button';
import { useState } from 'react';


function Home() {

    const [prompt, setPrompt] = useState('')
    const [key, setKey] = useState(0)
    const [promptList, setPromptList] = useState([])

  return (
      //use stack
    <div id='container'>Home
        <Stack id='stack' spacing={2}>
            <h1 id='title'>Fun With AI</h1>
            <InputBox id='textbox' input={[prompt, setPrompt]}/>
            <div id='buttons'>
                <Button 
                id='submitButton' 
                variant="contained"
                onClick={() => {setKey(key + 1); setPromptList([prompt, ...promptList]);}}
                >Submit</Button>
            </div>
            <h2 id='responses'>Responses</h2>
            {/*<ResponseCard input={[prompt, setPrompt]}/>*/}
            {promptList.map((item, index) => (
            <ResponseCard input={item} key={index}></ResponseCard>))}
        </Stack>
    </div>
  )
}

export default Home