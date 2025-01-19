import AEntity from 'src/models/entities/AEntity'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class NewsEntry extends AEntity {
  image!: GalleryEntry
  showUntil?: Date
  text?: string
  url?: URL
}
