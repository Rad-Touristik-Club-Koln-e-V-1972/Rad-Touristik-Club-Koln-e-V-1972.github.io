import AEntity from 'src/models/entities/AEntity'
import type Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class NewsEntry extends AEntity {
  gallery?: Gallery
  showUntil?: Date
  text?: string
  url?: URL
  youtubeVideoId?: string
}
