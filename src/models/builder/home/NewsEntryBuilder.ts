import ABuilder from 'src/models/builder/ABuilder'
import News from 'src/models/entities/home/News'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class NewsEntryBuilder extends ABuilder {
  private newsEntry = new News()

  buildNewsEntry = () => Object.assign(this.newsEntry, this.buildAEntity())

  setImage = (value: GalleryAlbumEntry): this => {
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
