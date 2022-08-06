import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'

export default class Gallery extends AEntity {
    category = EEvent.RTC
    description = ''
    end?: Date
    images: Record<string, GalleryEntry[]> = {}
    location = ''
    start = new Date()
    title = ''
    titleImageUrl: URL = new URL('https://rtc-koeln.de/')
    youtubeVideoIds: string[] = []
}
