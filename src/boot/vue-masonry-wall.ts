import { boot } from 'quasar/wrappers'
import MasonryWall from '@yeger/vue-masonry-wall'

export default boot(({ app }) => {
    app.use(MasonryWall)
})
