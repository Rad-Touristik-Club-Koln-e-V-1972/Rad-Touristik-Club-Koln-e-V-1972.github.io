import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'

export default class GuestbookEntry extends AEntity {
    answer = ''
    category = EEvent.RTC
    date = new Date()
    imageUrls: GalleryEntry[] = []
    location = ''
    name = ''
    organization = ''
    source = ESource['E-Mail']
    text = ''
    title = ''
}
