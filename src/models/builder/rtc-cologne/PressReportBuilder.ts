import ABuilder from 'src/models/builder/ABuilder'
import PressReport from 'src/models/entities/rtc-cologne/PressReport'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class PressReportBuilder extends ABuilder {
    private entity = new PressReport()

    build = () => Object.assign(this.entity, super.build())

    setDate = (value: string): this => {
        this.entity.date = new Date(value)

        return this
    }

    setImages = (...value: GalleryEntry[]): this => {
        this.entity.images = value

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }
}
