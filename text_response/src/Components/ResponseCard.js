import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import '../Styles/ResponseCard.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

function ResponseCard({input, reply}) {
  return (
    <Card id='card' variant="outlined" style={{backgroundColor: '#F1FFF0'}}>
      <CardContent>
          <Typography className='subheaders'>
              <strong>Prompt:</strong> {input}
          </Typography>      
          <Typography className='subheaders'>
              <strong>Response:</strong> {reply}
          </Typography>
      </CardContent>
    </Card>
  );
}

export default ResponseCard;