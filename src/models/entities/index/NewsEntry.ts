import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class NewsEntry extends AEntity {
    image!: GalleryEntry
    text!: string
}
