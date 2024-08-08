import { Repository } from 'pinia-orm'
import BlogEntry from 'src/models/entities/home/BlogEntry'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

export default class BlogRepository extends Repository<BlogEntry> {
  override use = BlogEntry

  allBeforeTomorrow = () =>
    this.with('galleries')
      .where((it) => it.start < dateTime.tomorrowMidnight.value)
      .get()
}
