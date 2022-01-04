import React from 'react';
import { render } from '@testing-library/react';
import { MaterialDesign3Theme } from '../../asset';
import { ThemeProvider } from '@mui/material/styles';
import { Chip } from '.';
import FaceIcon from '@mui/icons-material/Face';

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <ThemeProvider theme={MaterialDesign3Theme}>
        <Chip
          checked
          clickable
          variant="outlined"
          icon={<FaceIcon />}
          label="Chip Test"
        />
      </ThemeProvider>
    );
  });
});
