import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class Contact extends AEntity {
    date!: Date
    images!: GalleryEntry[]
    title!: string
}
