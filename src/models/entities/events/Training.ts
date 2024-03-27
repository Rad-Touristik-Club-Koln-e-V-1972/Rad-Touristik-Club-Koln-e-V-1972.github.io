import AEntity from 'src/models/entities/AEntity'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class Training extends AEntity {
    alternativeDay!: string
    day!: string
    departure!: string
    imageUrls: GalleryEntry[] = []
    length!: string
    location!: string
    speed!: string
    text!: string
    title!: string
}
