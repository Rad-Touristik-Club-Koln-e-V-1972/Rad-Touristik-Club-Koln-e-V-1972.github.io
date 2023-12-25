import mime from 'mime/lite'
import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder {
    private galleryEntry = new GalleryEntry()

    buildGalleryEntry = () => {
        return Object.assign(this.galleryEntry, this.buildAEntity())
    }

    setImageUrl = (value: string): this => {
        this.galleryEntry.imageUrl = new URL(`https://${value}`)
        this.galleryEntry.mimeType = mime.getType(value)

        // Needed for pdfs with custom previewUrl
        if (value.includes('.avif')) this.galleryEntry.previewUrl = this.galleryEntry.imageUrl

        return this
    }

    setPreviewUrl = (value: string): this => {
        this.galleryEntry.previewUrl = new URL(`https://${value}`)

        return this
    }
}
