import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui-rt/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  globalCss,
  keyframes,
  getCssText,
  css,
  styled,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
