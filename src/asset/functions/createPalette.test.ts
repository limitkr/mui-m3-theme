import { createM3Palette, convertM3ToMuiPalette } from './createPalette';

const rgbColor = {
  r: 103,
  g: 80,
  b: 164,
  a: 1,
};
const result = {
  dark: {
    background: '#1c1b1e',
    error: '#ffb4a9',
    errorContainer: '#930006',
    inverseOnSurface: '#313033',
    inversePrimary: '#6750a4',
    inverseSurface: '#e6e1e5',
    onBackground: '#e6e1e5',
    onError: '#680003',
    onErrorContainer: '#ffb4a9',
    onPrimary: '#381e73',
    onPrimaryContainer: '#eaddff',
    onSecondary: '#332d41',
    onSecondaryContainer: '#e8def8',
    onSurface: '#e6e1e5',
    onSurfaceVariant: '#cac4cf',
    onTertiary: '#4a2532',
    onTertiaryContainer: '#ffd8e4',
    outline: '#948f99',
    primary: '#d0bcff',
    primaryContainer: '#4f378b',
    secondary: '#cbc2db',
    secondaryContainer: '#4a4458',
    shadow: '#000000',
    surface: '#1c1b1e',
    surfaceVariant: '#49454f',
    tertiary: '#efb8c8',
    tertiaryContainer: '#633b48',
  },
  light: {
    background: '#fffbfe',
    error: '#ba1b1b',
    errorContainer: '#ffdad4',
    inverseOnSurface: '#f4eff4',
    inversePrimary: '#d0bcff',
    inverseSurface: '#313033',
    onBackground: '#1c1b1e',
    onError: '#ffffff',
    onErrorContainer: '#410001',
    onPrimary: '#ffffff',
    onPrimaryContainer: '#22005d',
    onSecondary: '#ffffff',
    onSecondaryContainer: '#1e192b',
    onSurface: '#1c1b1e',
    onSurfaceVariant: '#49454f',
    onTertiary: '#ffffff',
    onTertiaryContainer: '#31101d',
    outline: '#79757f',
    primary: '#6750a4',
    primaryContainer: '#eaddff',
    secondary: '#625b71',
    secondaryContainer: '#e8def8',
    shadow: '#000000',
    surface: '#fffbfe',
    surfaceVariant: '#e7e0ec',
    tertiary: '#7d5260',
    tertiaryContainer: '#ffd8e4',
  },
};

const paletteResult = {
  primary: {
    main: result.light.primary,
    on: result.light.onPrimary,
    container: result.light.primaryContainer,
    onContainer: result.light.onPrimaryContainer,
  },
  secondary: {
    main: result.light.secondary,
    on: result.light.onSecondary,
    container: result.light.secondaryContainer,
    onContainer: result.light.onSecondaryContainer,
  },
  tertiary: {
    main: result.light.tertiary,
    on: result.light.onTertiary,
    container: result.light.tertiaryContainer,
    onContainer: result.light.onTertiaryContainer,
  },
  surface: {
    main: result.light.surface,
    on: result.light.onSurface,
    variant: result.light.surfaceVariant,
    onVariant: result.light.onSurfaceVariant,
  },
  background: {
    default: result.light.background,
    paper: result.light.onBackground,
  },
  outline: {
    main: result.light.outline,
  },
  tonalOffset: 0.1,
  text: {},
};

test('Create palette test', () => {
  expect(createM3Palette(rgbColor).light).toStrictEqual(result.light);
  expect(createM3Palette(rgbColor).dark).toStrictEqual(result.dark);
});

test('Convert m3 palette to mui palette', () => {
  expect(convertM3ToMuiPalette(createM3Palette(rgbColor))).toStrictEqual(
    paletteResult
  );
});
