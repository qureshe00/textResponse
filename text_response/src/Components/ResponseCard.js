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
    <Card id='card' variant="outlined" style={{display: 'inline-block', width: '100%', backgroundColor: '#EBE3EA'}}>
      <CardContent>
          <Typography className='subheaders'>
              Prompt: {input}
          </Typography>      
          <Typography className='subheaders'>
              Response: {reply}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ResponseCard;