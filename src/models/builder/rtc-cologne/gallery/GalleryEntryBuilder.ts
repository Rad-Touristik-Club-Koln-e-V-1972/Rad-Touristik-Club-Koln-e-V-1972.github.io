import { getType } from 'mime/lite'
import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder {
    private entity = new GalleryEntry()
    private previewUrl: string | null = null

    build = () => {
        this.entity.previewUrl = this.previewUrl ? new URL(`https://${this.previewUrl}`) : this.createPreviewURL(this.entity.imageUrl)

        return Object.assign(this.entity, super.build())
    }

    setImageUrl = (value: string): this => {
        this.entity.imageUrl = new URL(`https://${value}`)
        this.entity.mimeType = getType(value)

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
