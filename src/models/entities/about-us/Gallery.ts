import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'

export default class Gallery extends AEntity {
    category = EEvent.RTC
    dateFrom = new Date()
    dateTo?: Date
    description = ''
    images: Record<string, GalleryEntry[]> = {}
    location = ''
    title = ''
    titleImageUrl: URL = new URL('https://rtc-koeln.de')
    youtubeVideoIds: string[] = []
}
