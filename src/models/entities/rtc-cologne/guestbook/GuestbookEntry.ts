import AEntity from 'src/models/entities/AEntity'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'

export default class GuestbookEntry extends AEntity {
  answer!: string
  category = EEvent.RTC
  date!: Date
  imageUrls: GalleryEntry[] = []
  location!: string
  name!: string
  organization!: string
  source = ESource['E-Mail']
  text!: string
  title!: string
}
