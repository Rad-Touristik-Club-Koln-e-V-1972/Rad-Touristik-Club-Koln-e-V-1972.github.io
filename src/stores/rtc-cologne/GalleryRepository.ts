import { Repository } from 'pinia-orm'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class GalleryRepository extends Repository<Gallery> {
  override use = Gallery

  allSortedByDate = () => this.allSortedByDateInternal().get()
  allGroupedByYear = () => this.allSortedByDateInternal().groupBy('time.start.getFullYear()').get()

  private allSortedByDateInternal = () => this.with('time').orderBy((it: CalendarEvent) => it.time.start)
}
