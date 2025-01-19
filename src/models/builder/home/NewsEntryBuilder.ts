import ABuilder from 'src/models/builder/ABuilder'
import NewsEntry from 'src/models/entities/home/NewsEntry'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class NewsEntryBuilder extends ABuilder {
  private newsEntry = new NewsEntry()

  buildNewsEntry = () => Object.assign(this.newsEntry, this.buildAEntity())

  setImage = (value: GalleryEntry): this => {
    this.newsEntry.image = value

    return this
  }

  setShowUntil = (value: string): this => {
    this.newsEntry.showUntil = new Date(value)

    return this
  }

  setText = (value: string): this => {
    this.newsEntry.text = value.replaceAll('\n', '<br>')

    return this
  }
}
