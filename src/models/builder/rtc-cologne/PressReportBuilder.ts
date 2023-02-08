import ABuilder from '~/models/builder/ABuilder'
import PressReport from '~/models/entities/rtc-cologne/PressReport'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class PressReportBuilder extends ABuilder<PressReport> {
    private entity = new PressReport()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setDate(value: string): PressReportBuilder {
        this.entity.date = new Date(value)

        return this
    }

    setImages(...value: GalleryEntry[]): PressReportBuilder {
        this.entity.images = value

        return this
    }

    setTitle(value: string): PressReportBuilder {
        this.entity.title = value

        return this
    }
}
