import {
  CorePalette,
  TonalPalette,
} from '@elemental-design/material-color-utilities';

function getColor(tonalPalette: TonalPalette, tone: number) {
  const hexaDecimalColor = tonalPalette.tone(tone);
  return `#${hexaDecimalColor.toString(16).replace('ff', '')}`;
}

export const createTonalPalette = (corePalette: CorePalette) => {
  const { a1, a2, a3, error, n1, n2 } = corePalette;

  return {
    primary: {
      0: getColor(a1, 0),
      10: getColor(a1, 10),
      20: getColor(a1, 20),
      30: getColor(a1, 30),
      40: getColor(a1, 40),
      50: getColor(a1, 50),
      60: getColor(a1, 60),
      70: getColor(a1, 70),
      80: getColor(a1, 80),
      90: getColor(a1, 90),
      95: getColor(a1, 95),
      99: getColor(a1, 99),
      100: getColor(a1, 100),
    },
    secondary: {
      0: getColor(a2, 0),
      10: getColor(a2, 10),
      20: getColor(a2, 20),
      30: getColor(a2, 30),
      40: getColor(a2, 40),
      50: getColor(a2, 50),
      60: getColor(a2, 60),
      70: getColor(a2, 70),
      80: getColor(a2, 80),
      90: getColor(a2, 90),
      95: getColor(a2, 95),
      99: getColor(a2, 99),
      100: getColor(a2, 100),
    },
    tertiary: {
      0: getColor(a3, 0),
      10: getColor(a3, 10),
      20: getColor(a3, 20),
      30: getColor(a3, 30),
      40: getColor(a3, 40),
      50: getColor(a3, 50),
      60: getColor(a3, 60),
      70: getColor(a3, 70),
      80: getColor(a3, 80),
      90: getColor(a3, 90),
      95: getColor(a3, 95),
      99: getColor(a3, 99),
      100: getColor(a3, 100),
    },
    error: {
      0: getColor(error, 0),
      10: getColor(error, 10),
      20: getColor(error, 20),
      30: getColor(error, 30),
      40: getColor(error, 40),
      50: getColor(error, 50),
      60: getColor(error, 60),
      70: getColor(error, 70),
      80: getColor(error, 80),
      90: getColor(error, 90),
      95: getColor(error, 95),
      99: getColor(error, 99),
      100: getColor(error, 100),
    },
    neutral: {
      0: getColor(n1, 0),
      10: getColor(n1, 10),
      20: getColor(n1, 20),
      30: getColor(n1, 30),
      40: getColor(n1, 40),
      50: getColor(n1, 50),
      60: getColor(n1, 60),
      70: getColor(n1, 70),
      80: getColor(n1, 80),
      90: getColor(n1, 90),
      95: getColor(n1, 95),
      99: getColor(n1, 99),
      100: getColor(n1, 100),
    },
    neutralVariant: {
      0: getColor(n2, 0),
      10: getColor(n2, 10),
      20: getColor(n2, 20),
      30: getColor(n2, 30),
      40: getColor(n2, 40),
      50: getColor(n2, 50),
      60: getColor(n2, 60),
      70: getColor(n2, 70),
      80: getColor(n2, 80),
      90: getColor(n2, 90),
      95: getColor(n2, 95),
      99: getColor(n2, 99),
      100: getColor(n2, 100),
    },
  };
};
