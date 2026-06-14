import ABuilder from 'src/models/builder/ABuilder'
import NewsEntry from 'src/models/entities/home/NewsEntry'
import type Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class NewsEntryBuilder extends ABuilder {
  private newsEntry = new NewsEntry()

  buildNewsEntry = () => Object.assign(this.newsEntry, this.buildAEntity())

  setGallery = (value: Gallery): this => {
    this.newsEntry.gallery = value

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

  setUrl = (value: string): this => {
    this.newsEntry.url = new URL(`https://${value}`)

    return this
  }

  setYoutubeVideoId = (value: string): this => {
    this.newsEntry.youtubeVideoId = value

    return this
  }
}
