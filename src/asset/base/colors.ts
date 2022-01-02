import { createM3Palette } from '../functions';

const rgbColor = {
  r: 103,
  g: 80,
  b: 164,
  a: 1,
};

const m3Palette = createM3Palette(rgbColor);

const palette = {
  primary: {
    main: m3Palette.light.primary,
    on: m3Palette.light.onPrimary,
    container: m3Palette.light.primaryContainer,
    onContainer: m3Palette.light.onPrimaryContainer,
  },
  secondary: {
    main: m3Palette.light.secondary,
    on: m3Palette.light.onSecondary,
    container: m3Palette.light.secondaryContainer,
    onContainer: m3Palette.light.onSecondaryContainer,
  },
  tertiary: {
    main: m3Palette.light.tertiary,
    on: m3Palette.light.onTertiary,
    container: m3Palette.light.tertiaryContainer,
    onContainer: m3Palette.light.onTertiaryContainer,
  },
  surface: {
    main: m3Palette.light.surface,
    on: m3Palette.light.onSurface,
    variant: m3Palette.light.surfaceVariant,
    onVariant: m3Palette.light.onSurfaceVariant,
  },
  background: {
    default: m3Palette.light.background,
    paper: m3Palette.light.onBackground,
  },
  outline: {
    main: m3Palette.light.outline,
  },
  tonalOffset: 0.1,
  text: {},
}; // as PaletteOptions;

export default palette;
