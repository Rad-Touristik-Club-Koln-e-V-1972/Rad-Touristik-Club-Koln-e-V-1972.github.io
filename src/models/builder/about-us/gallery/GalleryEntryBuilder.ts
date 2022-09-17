import ABuilder from '~/models/builder/ABuilder'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

const createPreviewURL = (value: URL) => {
    const strings = value.href.split('/')
    return new URL(`${strings.slice(0, -1).join('/')}/preview/preview.${strings.at(-1)}`)
}

export default class GalleryEntryBuilder extends ABuilder<GalleryEntry> {
    constructor() {
        super(new GalleryEntry())
    }

    imageUrl(value: string): GalleryEntryBuilder {
        this.value.imageUrl = new URL(`https://${value}`)

        return this
    }

    previewUrl(value: string): GalleryEntryBuilder {
        this.value.previewUrl = new URL(`https://${value}`)

        return this
    }

    build(): GalleryEntry {
        if (!this.value.previewUrl) this.value.previewUrl = createPreviewURL(this.value.imageUrl)

        return this.value
    }
}
