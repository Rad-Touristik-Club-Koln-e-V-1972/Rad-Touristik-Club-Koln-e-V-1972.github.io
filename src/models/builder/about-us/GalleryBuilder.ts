import Gallery from '~/models/entities/about-us/Gallery'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

export default class GalleryBuilder {
    private readonly value: Gallery

    constructor() {
        this.value = new Gallery()
    }

    category(value: EEvent): GalleryBuilder {
        this.value.category = value

        return this
    }

    dateFrom(value: Date): GalleryBuilder {
        this.value.dateFrom = value

        return this
    }

    dateTo(value: Date): GalleryBuilder {
        this.value.dateTo = value

        return this
    }

    description(value: string): GalleryBuilder {
        this.value.description = value

        return this
    }

    image(value: GalleryEntry, album = ''): GalleryBuilder {
        if (!this.value.images[album]) this.value.images[album] = []

        this.value.images[album].push(value)

        return this
    }

    images(value: Record<string, GalleryEntry[]>): GalleryBuilder {
        const key = Object.keys(value)[0]

        if (!this.value.images[key]) this.value.images[key] = []

        this.value.images[key].push(...value[key])

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

    youtubeVideoId(value: string): GalleryBuilder {
        this.value.youtubeVideoIds.push(value)

        return this
    }

    build(): Gallery {
        return this.value
    }
}
