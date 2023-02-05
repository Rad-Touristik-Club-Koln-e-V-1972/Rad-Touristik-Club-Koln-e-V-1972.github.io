import ABuilder from '~/models/builder/ABuilder'
import PressReport from '~/models/entities/rtc-cologne/PressReport'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class PressReportBuilder extends ABuilder<PressReport> {
    private date!: Date
    private images: GalleryEntry[] = []
    private title!: string

    build() {
        return {
            date: this.date,
            id: this.id,
            images: this.images,
            title: this.title,
        } satisfies PressReport
    }

    setDate(value: string): PressReportBuilder {
        this.date = new Date(value)

        return this
    }

    setImages(...value: GalleryEntry[]): PressReportBuilder {
        this.images = value

        return this
    }

    setTitle(value: string): PressReportBuilder {
        this.title = value

        return this
    }
}
