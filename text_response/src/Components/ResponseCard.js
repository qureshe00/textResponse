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

function ResponseCard() {
  return (
    <Card variant="outlined" style={{display: 'inline-block', width: '55%'}}>
      <CardContent>
          <Typography className='subheaders'>
              Prompt:
          </Typography>      
          <Typography className='subheaders'>
              Response:
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ResponseCard;