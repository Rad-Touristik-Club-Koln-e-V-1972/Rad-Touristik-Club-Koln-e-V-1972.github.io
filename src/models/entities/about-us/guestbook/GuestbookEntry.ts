import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'

export default class GuestbookEntry extends AEntity {
    answer!: string
    category = EEvent.RTC
    date!: Date
    imageUrls?: GalleryEntry[]
    location!: string
    name!: string
    organization!: string
    source = ESource['E-Mail']
    text!: string
    title!: string
}
