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
                accent: colors.shades.white,
                primary: '#ed5700',
                secondary: colors.shades.black,
            },
        },
    },
}
