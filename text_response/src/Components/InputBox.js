import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function InputBox({input}) {

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
          label="Enter a prompt"
          multiline
          rows={5}
          width="100%"
          value={input[0]}
          color="success"
          onChange={(e)=> {input[1](e.target.value)}}
        />
      </div>
    </Box>
  );
}
export default InputBox