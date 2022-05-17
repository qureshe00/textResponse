import React from 'react'
import InputBox from '../Components/InputBox'
import '../Styles/Home.css'
import ResponseCard from '../Components/ResponseCard'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button';

function Home() {
  return (
      //use stack
    <div id='container'>Home
        <Stack id='stack' spacing={2}>
            <h1 id='title'>Fun With AI</h1>
            <InputBox id='textbox'/>
            <div id='buttons'>
                <Button id='submitButton' variant="contained">Submit</Button>
            </div>
            <ResponseCard/>
        </Stack>
    </div>
  )
}

export default Home