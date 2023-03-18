import AEntity from '~/models/entities/AEntity'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import ETraining from '~/models/enums/events/ETraining'

export default class Training extends AEntity {
    category = ETraining.wintertraining
    height!: string
    imageUrls: GalleryEntry[] = []
    lastChange!: Date
    length!: string
    speed!: string
    text!: string
    title!: string
}
