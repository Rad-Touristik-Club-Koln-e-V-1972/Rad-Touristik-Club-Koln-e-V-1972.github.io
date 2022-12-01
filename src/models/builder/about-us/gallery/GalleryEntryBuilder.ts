import mimeTypes from 'mime-types'
import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

export default class GalleryEntryBuilder extends ABuilder<GalleryEntry> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private imageUrl!: string
    private previewUrl?: string

    build() {
        const _imageUrl = new URL(`https://${this.imageUrl}`)

        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                imageUrl: _imageUrl,
                mimeType: mimeTypes.lookup(this.imageUrl),
                previewUrl: this.previewUrl ? new URL(`https://${this.previewUrl}`) : this.createPreviewURL(_imageUrl),
            },
            new AEntity(this.id)
        ) as GalleryEntry
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
