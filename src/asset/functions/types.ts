export type RGBColor = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

/**
 * Material Design 3 Palette Role.
 * Reference [link](https://m3.material.io/styles/color/the-color-system/tokens).
 */
export type M3PaletteRole =
  | 'primary'
  | 'primaryContainer'
  | 'secondary'
  | 'secondaryContainer'
  | 'tertiary'
  | 'tertiaryContainer'
  | 'surface'
  | 'surfaceVariant'
  | 'background'
  | 'error'
  | 'errorContainer'
  | 'onPrimary'
  | 'onPrimaryContainer'
  | 'onSecondary'
  | 'onSecondaryContainer'
  | 'onTertiary'
  | 'onTertiaryContainer'
  | 'onSurface'
  | 'onSurfaceVariant'
  | 'onError'
  | 'onErrorContainer'
  | 'onBackground'
  | 'outline'
  | 'shadow'
  | 'inverseSurface'
  | 'inverseOnSurface'
  | 'inversePrimary';

export type M3TonalPalette = Record<M3PaletteRole, string>;
export type M3Palette = { light: M3TonalPalette; dark: M3TonalPalette };
