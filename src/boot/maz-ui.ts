import { defineBoot } from '#q-app/wrappers'
import { MazUi } from 'maz-ui/plugins/maz-ui'
import { mazUi } from '@maz-ui/themes/presets'
import { de, en } from '@maz-ui/translations'

import 'maz-ui/styles'

export default defineBoot(({ app }) => {
  app.use(MazUi, {
    theme: {
      preset: mazUi,
    },
    translations: {
      locale: 'de',
      fallbackLocale: 'en',
      messages: {
        de,
        en,
      },
    },
  })
})
