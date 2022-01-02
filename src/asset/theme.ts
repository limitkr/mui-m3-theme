import { createTheme, PaletteColorOptions, Theme } from '@mui/material/styles';
import { convertM3ToMuiPalette } from './functions/createPalette';
import colors from './base/colors';

import button from './components/button';
import { M3Palette } from './functions/types';

declare module '@mui/material/styles' {
  interface TypeBackground {
    default: string;
    paper: string;
  }
  interface TypeSurface {
    main: string;
    default: string;
    on: string;
    variant: string;
    surfaceVariant: string;
  }
  interface SimplePaletteColorOptions {
    main: string;
    on: string;
    container: string;
    onContainer: string;
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    background?: Partial<TypeBackground>;
    surface?: Partial<TypeSurface>;
    outline?: Pick<SimplePaletteColorOptions, 'main'>;
  }
  interface PaletteColor {
    main: string;
    on: string;
    container: string;
    onContainer: string;
  }
  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    error: PaletteColor;
    surface: TypeSurface;
    background: TypeBackground;
    outline: Pick<PaletteColor, 'main'>;
  }
}

/**
 * @deprecated
 */
export const MaterialDesign3Theme = createTheme({
  typography: {
    /**
     * Google uses its own font; Product Sans. However, Google offers many fonts
     * under open source licenses but Product Sans not one of them. [Link](https://fonts.google.com/license/productsans)
     * Manrope font is very similar to Product Sans font.
     */
    fontFamily: ['Manrope', 'Roboto'].join(', '),
  },
  palette: colors,
  components: {
    MuiButton: {
      ...button,
    },
  },
}) as Theme;

/**
 * Function that can create a Material Design 3 Theme based on the custom color.
 * @param m3Palette Material Design 3 Palette generated from function `createM3Palette`.
 * @returns Material UI `Theme`.
 */
// eslint-disable-next-line camelcase
export const unstable_createMaterialDesign3Theme = (m3Palette: M3Palette) => {
  const muiPalette = convertM3ToMuiPalette(m3Palette);
  return createTheme({
    typography: {
      fontFamily: ['Manrope'].join(', '),
    },
    palette: muiPalette,
    components: {
      MuiButton: {
        ...button,
      },
    },
  }) as Theme;
};
