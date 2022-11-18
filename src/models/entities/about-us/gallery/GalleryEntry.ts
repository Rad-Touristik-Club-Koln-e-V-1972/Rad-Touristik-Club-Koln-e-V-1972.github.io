import AEntity from '~/models/entities/AEntity'

export default class GalleryEntry extends AEntity {
    imageUrl!: URL
    previewUrl?: URL
}
