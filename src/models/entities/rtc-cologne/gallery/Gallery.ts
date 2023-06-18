import AEntity from 'src/models/entities/AEntity'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from 'src/models/enums/EEvent'

export default class Gallery extends AEntity {
    category = EEvent.RTC
    description!: string
    end: Date | null = null
    images: Record<string, GalleryEntry[]> = {}
    location!: string
    start!: Date
    title!: string
    titleImageUrl!: URL
    youtubeVideoIds: string[] = []
}
