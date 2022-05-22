import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Settings from './Settings';
import '../Styles/NavBar.css';

function NavBar({handleClickOpen, handleClickOpenHelp}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id='main' position="static">
        <Toolbar sx={{justifyContent: "space-between"}}>
            <div id='left'>
                <Typography id="title" variant="h6">Fun With AI</Typography>
            </div>
            <div id='right'>
            <IconButton 
                id='help' 
                color="inherit"
                onClick={handleClickOpenHelp}>
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton 
                id='settings' 
                color="inherit"
                onClick={handleClickOpen}>
                <SettingsIcon/>
            </IconButton>
            </div>  
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;