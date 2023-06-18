import AEntity from 'src/models/entities/AEntity'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class Contact extends AEntity {
    date!: Date
    images: GalleryEntry[] = []
    title!: string
}
