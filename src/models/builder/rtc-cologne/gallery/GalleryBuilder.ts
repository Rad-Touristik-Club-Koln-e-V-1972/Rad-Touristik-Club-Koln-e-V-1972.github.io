import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Gallery from '~/models/entities/rtc-cologne/gallery/Gallery'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryBuilder extends ABuilder<Gallery> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private category = EEvent.RTC
    private description!: string
    private end?: Date
    private images!: Record<string, GalleryEntry[]>
    private location!: string
    private start!: Date
    private title!: string
    private titleImageUrl!: string
    private youtubeVideoIds!: string[]

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                category: this.category,
                description: this.description,
                end: this.end,
                images: this.images ?? {},
                location: this.location,
                start: this.start,
                title: this.title,
                titleImageUrl: new URL(`https://${this.titleImageUrl}`),
                youtubeVideoIds: this.youtubeVideoIds ?? [],
            },
            new AEntity(this.id)
        ) as Gallery
    }

    setCategory(value: EEvent): GalleryBuilder {
        this.category = value

        return this
    }

    setDate(start: string, end?: string): GalleryBuilder {
        this.start = new Date(start)
        this.end = end ? new Date(end) : undefined

        return this
    }

    setDescription(value: string): GalleryBuilder {
        this.description = value

        return this
    }

    setImages(value: Record<string, GalleryEntry[]> | GalleryEntry[] | GalleryEntry): GalleryBuilder {
        if (value instanceof Array) this.images = { '': value }
        else if (value.constructor === GalleryEntry) this.images = { '': [value] }
        else this.images = value as Record<string, GalleryEntry[]>

        return this
    }

    setLocation(value: string): GalleryBuilder {
        this.location = value

        return this
    }

    setTitle(value: string): GalleryBuilder {
        this.title = value

        return this
    }

    setTitleImageUrl(value: string): GalleryBuilder {
        this.titleImageUrl = value

        return this
    }

    setYoutubeVideoIds(...value: string[]): GalleryBuilder {
        this.youtubeVideoIds = value

        return this
    }
}
