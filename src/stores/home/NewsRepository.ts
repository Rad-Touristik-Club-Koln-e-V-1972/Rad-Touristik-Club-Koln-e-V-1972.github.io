import { Repository } from 'pinia-orm'
import News from 'src/models/entities/home/News'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

export default class NewsRepository extends Repository<News> {
  override use = News

  allValid = () =>
    this.with('galleryEntry')
      .where((it) => {
        const ret = it.showUntil && dateTime.todayMidnight.value > it.showUntil

        if (ret) console.warn(`!! NewsEntry ${it.id} is not valid anymore and will be removed from the list !!`)

        return !ret
      })
      .get()
}
