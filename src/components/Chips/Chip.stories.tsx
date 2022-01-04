import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import Chip from './Chip';
import FaceIcon from '@mui/icons-material/Face';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const ChipPreviewTemplate: ComponentStory<typeof Chip> = (args) => {
  const [hexColor, setHexColor] = React.useState<RGBColor>({
    r: 103,
    g: 80,
    b: 164,
    a: 1,
  });
  const handleChangeComplete = (color: ColorResult) => {
    setHexColor(color.rgb);
  };
  const m3Palette = createM3Palette(hexColor);
  const myTheme = unstable_createMaterialDesign3Theme(m3Palette);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <SketchPicker
            color={hexColor}
            onChangeComplete={handleChangeComplete}
          />
          <Grid container item spacing={2}>
            <Grid item xs>
              <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold">
                Chips
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip label={args.children} />
                <Chip
                  clickable
                  label={'Clickable ' + args.children}
                  variant={args.variant}
                />
                <Chip
                  icon={<FaceIcon />}
                  label={'Clickable ' + args.children}
                  variant={args.variant}
                  clickable
                  checked
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const ChipDemo = ChipPreviewTemplate.bind({});

ChipDemo.args = {
  children: 'Chip',
  variant: 'outlined',
  color: 'primary',
};
