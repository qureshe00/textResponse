import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dropdown from './Dropdown';


export default function Settings({openHelp, handleCloseHelp, handleClickOpenHelp}) {

  return (
      <Dialog
        open={openHelp}
        onClose={handleCloseHelp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"About Fun With AI"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Fun With AI is a tool that uses the Completions API offered by OpenAPI and allows you to type a prompt to see how the OpenAI engines respond. 
            OpenAI offers a variety of API's that produce machine-learned responses to virtually any human prompt. Note that well-formed and descriptive prompts result in responses with higher accuracy and relevance. Additionally,
            some of the AI models have not been trained on data past 2019 and are not capable of responding accurately
            to prompts regarding recent world events. To learn more about the OpenAI Completions API, how to craft well-formed responses,
            and what the models are capable of, please refer to the <a href="https://beta.openai.com/docs/guides/completion">OpenAI Completions API documentation.</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseHelp} autoFocus color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}