import AEntity from 'src/models/entities/AEntity'

export default class GalleryEntry extends AEntity {
    imageUrl!: URL
    mimeType!: string | null
    previewUrl!: URL
}
