import ABuilder from '~/models/builder/ABuilder'
import Gallery from '~/models/entities/about-us/Gallery'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

export default class GalleryBuilder extends ABuilder<Gallery> {
    constructor() {
        super(new Gallery())
    }

    category(value: EEvent): GalleryBuilder {
        this.value.category = value

        return this
    }

    date(start: string, end?: string): GalleryBuilder {
        this.value.start = new Date(start)
        if (end) this.value.end = new Date(end)

        return this
    }

    description(value: string): GalleryBuilder {
        this.value.description = value

        return this
    }

    images(value: Record<string, GalleryEntry[]> | GalleryEntry[] | GalleryEntry): GalleryBuilder {
        if (value instanceof Array) this.value.images = { '': value }
        else if (value.constructor === GalleryEntry) this.value.images = { '': [value] }
        else this.value.images = value as Record<string, GalleryEntry[]>

        return this
    }

    location(value: string): GalleryBuilder {
        this.value.location = value

        return this
    }

    title(value: string): GalleryBuilder {
        this.value.title = value

        return this
    }

    titleImageUrl(value: string): GalleryBuilder {
        this.value.titleImageUrl = new URL(`https://${value}`)

        return this
    }

    youtubeVideoIds(...value: string[]): GalleryBuilder {
        this.value.youtubeVideoIds = value

        return this
    }
}
