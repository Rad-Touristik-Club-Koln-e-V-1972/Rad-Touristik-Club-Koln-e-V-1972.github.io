import AEntity from '~/models/entities/AEntity'

export default class GalleryEntry extends AEntity {
    imageUrl: URL = new URL('https://rtc-koeln.de/')
    previewUrl: URL = new URL('https://rtc-koeln.de/')
}
