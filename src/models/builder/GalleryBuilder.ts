import Gallery from '~/models/entities/Gallery'
import EEvent from '~/models/enums/EEvent'
import Entry from '~/models/entities/gallery/Entry'

export default class GalleryBuilder {
    private readonly value: Gallery

    constructor() {
        this.value = new Gallery()
    }

    category(value: EEvent): GalleryBuilder {
        this.value.category = value
        return this
    }

    description(value: string): GalleryBuilder {
        this.value.description = value
        return this
    }

    image(value: Entry): GalleryBuilder {
        this.value.images.push(value)
        return this
    }

    subtitle(value: string): GalleryBuilder {
        this.value.subtitle = value
        return this
    }

    title(value: string): GalleryBuilder {
        this.value.title = value
        return this
    }

    titleImageUrl(value: string): GalleryBuilder {
        this.value.titleImageUrl = value
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
