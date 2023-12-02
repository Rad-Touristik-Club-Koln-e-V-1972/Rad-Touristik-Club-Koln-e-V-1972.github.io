// TODO Workaround for `The requested module 'mime/lite' does not provide an export named 'getType'` https://github.com/broofa/mime/issues/291
import mime from 'mime/lite'
import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder {
    private galleryEntry = new GalleryEntry()
    private previewUrl: string | null = null

    buildGalleryEntry = () => {
        this.galleryEntry.previewUrl = this.createPreviewURL()

        return Object.assign(this.galleryEntry, this.buildAEntity())
    }

    setImageUrl = (value: string): this => {
        this.galleryEntry.imageUrl = new URL(`https://${value}`)
        // TODO Workaround for `The requested module 'mime/lite' does not provide an export named 'getType'` https://github.com/broofa/mime/issues/291
        this.galleryEntry.mimeType = mime.getType(value)

        return this
    }

    setPreviewUrl = (value: string): this => {
        this.previewUrl = value

        return this
    }

    // TODO Remove after every image is an avif
    private createPreviewURL = () => {
        if (this.previewUrl) {
            return new URL(`https://${this.previewUrl}`)
        } else if (this.galleryEntry.imageUrl.href.includes('.avif')) {
            return this.galleryEntry.imageUrl
        } else {
            const strings = this.galleryEntry.imageUrl.href.split('/')

            return new URL(`${strings.slice(0, -1).join('/')}/preview/preview.${strings.at(-1)}`)
        }
    }
}
