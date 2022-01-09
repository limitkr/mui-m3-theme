import React from 'react';
import { render } from '@testing-library/react';
import { MaterialDesign3Theme } from '../../asset';
import { ThemeProvider } from '@mui/material/styles';
import { DialogContent, DialogActions, Button } from '@mui/material';
import Dialog, { DialogTitle, DialogContentText } from './Dialog';

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <ThemeProvider theme={MaterialDesign3Theme}>
        <Dialog open>
          <DialogTitle>Basic dialog title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              A dialog is a type of modal window that appears in fornt of app
              content to provide critical information, or ask for a decision.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="text">Enabled</Button>
            <Button variant="text">Enabled</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    );
  });
});
