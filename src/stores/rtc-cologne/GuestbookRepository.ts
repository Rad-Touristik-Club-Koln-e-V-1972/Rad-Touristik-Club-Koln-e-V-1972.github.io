import { Repository } from 'pinia-orm'
import GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'

export default class GuestbookRepository extends Repository<GuestbookEntry> {
  override use = GuestbookEntry

  allGroupedByYear = () =>
    this.with('galleryEntries')
      .orderBy((it: GuestbookEntry) => it.date)
      .groupBy('date.getFullYear()')
      .get()
}
