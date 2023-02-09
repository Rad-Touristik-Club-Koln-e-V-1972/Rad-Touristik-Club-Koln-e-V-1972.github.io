import mimeTypes from 'mime-types'
import ABuilder from '~/models/builder/ABuilder'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder {
    private entity = new GalleryEntry()
    private previewUrl: string | null = null

    build() {
        this.entity.previewUrl = this.previewUrl ? new URL(`https://${this.previewUrl}`) : this.createPreviewURL(this.entity.imageUrl)

        return Object.assign(this.entity, super.build())
    }

    setImageUrl(value: string): GalleryEntryBuilder {
        this.entity.imageUrl = new URL(`https://${value}`)
        this.entity.mimeType = mimeTypes.lookup(value)

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
