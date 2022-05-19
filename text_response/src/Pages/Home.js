import React from 'react'
import InputBox from '../Components/InputBox'
import '../Styles/Home.css'
import ResponseCard from '../Components/ResponseCard'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button';
import { useState } from 'react';
import API_key from '../environment';


function Home() {

    const [prompt, setPrompt] = useState('')
    const [key, setKey] = useState(0)
    const [promptList, setPromptList] = useState([])
    const [res, setRes] = useState()
    const [responseList, setResponseList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)

    function onButtonClick(){
        if((typeof(prompt) === 'string' || prompt instanceof String) && prompt.length > 0){
            setErrorMessage(false);
            setPromptList([prompt, ...promptList]); 
            req();
            console.log(prompt)
            console.log('valid input')
            console.log(errorMessage)
        } else {setErrorMessage(true)
        console.log('not valid input')
        console.log(errorMessage)
        console.log(prompt)}

    }
        
    function req(){ 
        const data = {
            prompt: prompt,
            temperature: 0.8,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
           }
        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_key}`,
        },
        body: JSON.stringify(data),
       }).then(response => response.json())
       .then(data => setResponseList([data.choices[0].text, ...responseList]));
    console.log(res)
    console.log(prompt)}

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
                onClick={() => {onButtonClick();}}
                >Submit</Button>
            </div>
            {errorMessage && <h2>please enter a prompt</h2>}
            <h2 id='responses'>Responses</h2>
            {promptList.map((item, index) => (
            <ResponseCard input={item} reply={responseList[index]} key={index}></ResponseCard>))}
        </Stack>
    </div>
  )
}

export default Home