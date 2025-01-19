import AEntity from 'src/models/entities/AEntity'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from 'src/models/enums/EEvent'

export default class Gallery extends AEntity {
  category = EEvent.RTC
  end?: Date
  images: Record<string, GalleryEntry[]> = {}
  location!: string
  start!: Date
  title!: string
  titleImageUrl!: URL
  youtubeVideoIds: string[] = []
}
