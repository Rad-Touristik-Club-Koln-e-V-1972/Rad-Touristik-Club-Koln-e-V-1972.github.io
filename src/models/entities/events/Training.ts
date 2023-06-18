import AEntity from 'src/models/entities/AEntity'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import ETraining from 'src/models/enums/events/ETraining'

export default class Training extends AEntity {
    category = ETraining.Wintertraining
    height!: string
    imageUrls: GalleryEntry[] = []
    lastChange!: Date
    length!: string
    speed!: string
    text!: string
    title!: string
}
