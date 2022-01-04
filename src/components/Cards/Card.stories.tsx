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
import { Card, CardContent, CardActions } from '.';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const CardPreviewTemplate: ComponentStory<typeof Card> = (args) => {
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
                Cards
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Card
                  sx={{ maxWidth: '275px', position: 'relative' }}
                  variant={args.variant} // color="primary"
                  clickable
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {args.children}
                    </Typography>
                    <Typography fontWeight="bold" variant="h5" component="div">
                      Title
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Subhead
                    </Typography>
                    <Typography variant="body2">
                      Material is a design system - backed by open source code -
                      that helps teams build high-quality digital experiences.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: '300px' }} variant={args.variant}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {args.children}
                    </Typography>
                    <Typography fontWeight="bold" variant="h5" component="div">
                      Title
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Subhead
                    </Typography>
                    <Typography variant="body2">
                      Material is a design system - backed by open source code -
                      that helps teams build high-quality digital experiences.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained">Learn More</Button>
                    <Button variant="outlined">Learn More</Button>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const ContainedCardView = CardPreviewTemplate.bind({});
export const OutlinedCardView = CardPreviewTemplate.bind({});
export const ElevatedCardView = CardPreviewTemplate.bind({});

ContainedCardView.args = {
  children: 'Filled Card',
  variant: 'contained',
};

OutlinedCardView.args = {
  children: 'Outlined Card',
  variant: 'outlined',
};

ElevatedCardView.args = {
  children: 'Elevated Card',
  variant: 'elevated',
};
