import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

const createPreviewURL = (value: URL) => {
    const strings = value.href.split('/')
    return new URL(`${strings.slice(0, -1).join('/')}/preview/preview.${strings.at(-1)}`)
}

export default class GalleryEntryBuilder {
    private readonly value: GalleryEntry

    constructor() {
        this.value = new GalleryEntry()
    }

    imageUrl(value: string): GalleryEntryBuilder {
        this.value.imageUrl = new URL(`https://${value}`)

        return this
    }

    previewUrl(value?: string): GalleryEntryBuilder {
        // eslint-disable-next-line no-console
        if (!value && !this.value.imageUrl) console.error('EntryBuilder.previewUrl: imageUrl is not set')

        this.value.previewUrl = value ? new URL(`https://${value}`) : createPreviewURL(this.value.imageUrl)

        return this
    }

    build(): GalleryEntry {
        return this.value
    }
}
