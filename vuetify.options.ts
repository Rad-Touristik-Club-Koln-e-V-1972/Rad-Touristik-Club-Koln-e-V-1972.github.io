/*
 * Created by Martin Dünkelmann on 06.02.22, 16:15
 * Copyright (c) 2022. All rights reserved.
 *
 * Last modified 06.02.22, 16:14
 */

import colors from 'vuetify/src/util/colors'
import de from 'vuetify/src/locale/de'

export default {
  lang: {
    locales: { de },
    current: 'de',
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        accent: colors.shades.black,
        primary: '#ed5700',
        secondary: colors.shades.white,
      },
    },
  },
}
