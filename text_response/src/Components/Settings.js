import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dropdown from './Dropdown';
import '../Styles/Settings.css';


export default function Settings({open, handleClose, handleClickOpen, engine, handleEngineChange}) {

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Choose a Response Engine"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            OpenAI offers four different GPT-3 models that trade-off between speed, accuracy and power. 
            Select a different engine to see how it responds to your prompts.
          </DialogContentText>
          <Dropdown id="toggle" engine={engine} handleEngineChange={handleEngineChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}