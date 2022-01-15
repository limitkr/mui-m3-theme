import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BadgeLabelTextProps } from './types';

function BadgeLabelText(props: BadgeLabelTextProps) {
  const theme = useTheme();
  const { text } = props;
  return (
    <Typography
      variant="body1"
      fontWeight={700}
      fontSize="14px"
      sx={{
        mr: 1,
        color: theme.palette.surface.onVariant,
        lineHeight: '20px',
        letterSpacing: '-0.2px',
      }}
    >
      {text}
    </Typography>
  );
}

export default BadgeLabelText;
