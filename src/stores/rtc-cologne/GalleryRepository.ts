import { Collection, Item, Repository } from 'pinia-orm'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class GalleryRepository extends Repository<Gallery> {
  override use = Gallery

  allSortedByDate: () => Collection<Gallery> = () => this.allSortedByDateInternal().get()
  allGroupedByYear: () => Collection<Gallery> = () => this.allSortedByDateInternal().groupBy('time.start.getFullYear()').get()

  findById: (id: string) => Item<Gallery> = (id: string) => this.find(id)

  private readonly allSortedByDateInternal = () => this.with('time').orderBy((it: CalendarEvent) => it.time.start)
}
