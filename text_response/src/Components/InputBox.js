import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function InputBox({input}) {
 
 /* const [prompt, setPrompt] = useState('')*/

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={5}
          /*defaultValue="Default Value"*/
          width="100%"
          value={input[0]}
          onChange={(e)=> {input[1](e.target.value)}}
        />
      </div>
    </Box>
  );
}

export default InputBox