import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'

export default class Gallery extends AEntity {
    category = EEvent.RTC
    description!: string
    end?: Date
    images!: Record<string, GalleryEntry[]>
    location!: string
    start!: Date
    title!: string
    titleImageUrl!: URL
    youtubeVideoIds!: string[]
}
