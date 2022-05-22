import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown({engine, handleEngineChange}) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Engine</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={engine}
          label="Engine"
          onChange={handleEngineChange}
        >
          <MenuItem value={'text-curie-001'}>text-curie-001</MenuItem>
          <MenuItem value={'text-davinci-002'}>text-davinci-002</MenuItem>
          <MenuItem value={'text-babbage-001'}>text-babbage-001</MenuItem>
          <MenuItem value={'text-ada-001'}>text-ada-001</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Dropdown