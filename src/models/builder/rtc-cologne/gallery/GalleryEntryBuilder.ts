import { getType } from 'mime/lite'
import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder {
    private galleryEntry = new GalleryEntry()
    private previewUrl: string | null = null

    buildGalleryEntry = () => {
        this.galleryEntry.previewUrl = this.previewUrl ? new URL(`https://${this.previewUrl}`) : this.createPreviewURL(this.galleryEntry.imageUrl)

        return Object.assign(this.galleryEntry, this.buildAEntity())
    }

    setImageUrl = (value: string): this => {
        this.galleryEntry.imageUrl = new URL(`https://${value}`)
        this.galleryEntry.mimeType = getType(value)

        return this
    }

    setPreviewUrl = (value: string): this => {
        this.previewUrl = value

        return this
    }

    private createPreviewURL = (value: URL) => {
        const strings = value.href.split('/')
        return new URL(`${strings.slice(0, -1).join('/')}/preview/preview.${strings.at(-1)}`)
    }
}
