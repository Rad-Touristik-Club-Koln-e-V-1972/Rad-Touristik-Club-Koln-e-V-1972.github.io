import mimeTypes from 'mime-types'
import ABuilder from '~/models/builder/ABuilder'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder<GalleryEntry> {
    private imageUrl!: string
    private previewUrl?: string

    build() {
        const _imageUrl = new URL(`https://${this.imageUrl}`)

        return {
            id: this.id,
            imageUrl: _imageUrl,
            mimeType: mimeTypes.lookup(this.imageUrl),
            previewUrl: this.previewUrl ? new URL(`https://${this.previewUrl}`) : this.createPreviewURL(_imageUrl),
        } satisfies GalleryEntry
    }

    setImageUrl(value: string): GalleryEntryBuilder {
        this.imageUrl = value

        return this
    }

    setPreviewUrl(value: string): GalleryEntryBuilder {
        this.previewUrl = value

        return this
    }

    private createPreviewURL = (value: URL) => {
        const strings = value.href.split('/')
        return new URL(`${strings.slice(0, -1).join('/')}/preview/preview.${strings.at(-1)}`)
    }
}
