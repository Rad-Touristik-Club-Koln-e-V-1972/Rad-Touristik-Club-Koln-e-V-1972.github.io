import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import PressReport from '~/models/entities/rtc-cologne/PressReport'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class PressReportBuilder extends ABuilder<PressReport> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private date!: Date
    private images!: GalleryEntry[]
    private title!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                date: this.date,
                images: this.images ?? [],
                title: this.title,
            },
            new AEntity(this.id)
        ) as PressReport
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
