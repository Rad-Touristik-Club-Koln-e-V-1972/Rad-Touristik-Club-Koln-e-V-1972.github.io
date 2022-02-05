/*
 * Created by Martin Dünkelmann on 05.02.22, 14:59
 * Copyright (c) 2022. All rights reserved.
 *
 * Last modified 05.02.22, 14:44
 */

import colors from 'vuetify/src/util/colors'
import de from 'vuetify/src/locale/de'

export default {
  lang: {
    locales: { de },
    current: 'de',
  },
  theme: {
    dark: false,
    options: { customProperties: true },
    themes: {
      dark: {
        primary: colors.shades.black,
        accent: '#ed5700',
        secondary: colors.shades.white,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
      light: {
        primary: colors.shades.white,
        accent: '#ed5700',
        secondary: colors.shades.black,
        info: colors.teal.darken1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
}
