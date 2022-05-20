import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({engine, handleEngineChange}) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={engine}
          label="Age"
          onChange={handleEngineChange}
        >
          <MenuItem value={'text-curie-001'}>text-curie-001</MenuItem>
          <MenuItem value={'text-curie-001'}>text-curie-001</MenuItem>
          <MenuItem value={'text-curie-001'}>text-curie-001</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}