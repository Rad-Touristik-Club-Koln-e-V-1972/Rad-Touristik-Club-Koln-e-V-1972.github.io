import { defineBoot } from '#q-app/wrappers'
import MasonryWall from '@yeger/vue-masonry-wall'

export default defineBoot(({ app }) => {
  app.use(MasonryWall)
})
