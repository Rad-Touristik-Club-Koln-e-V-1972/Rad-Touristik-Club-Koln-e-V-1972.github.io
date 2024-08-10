// https://github.com/michael-ciniawsky/postcss-load-config
// TODO rename to postcss.config.js with vite v6
import autoprefixer from 'autoprefixer'

// TODO Rename to postcss.config.ts with vite 6. See https://github.com/vitejs/vite/issues/15869 & https://github.com/vitejs/vite/pull/15235

export default {
  plugins: [
    // https://github.com/postcss/autoprefixer
    autoprefixer,

    // https://github.com/elchininet/postcss-rtlcss
    // If you want to support RTL css, then
    // 1. yarn/npm install postcss-rtlcss
    // 2. optionally set quasar.config.js > framework > lang to an RTL language
    // 3. uncomment the following line:
    // require('postcss-rtlcss')
  ],
}
