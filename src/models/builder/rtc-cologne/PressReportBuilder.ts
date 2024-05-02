import ABuilder from 'src/models/builder/ABuilder'
import PressReport from 'src/models/entities/rtc-cologne/PressReport'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class PressReportBuilder extends ABuilder {
  private pressReport = new PressReport()

  buildPressReport = () => Object.assign(this.pressReport, this.buildAEntity())

  setDate = (value: string): this => {
    this.pressReport.date = new Date(value)

    return this
  }

  setImages = (...value: GalleryAlbumEntry[]): this => {
    this.pressReport.images = value

    return this
  }

  setTitle = (value: string): this => {
    this.pressReport.title = value

    return this
  }
}
