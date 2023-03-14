import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import AEntity from '~/models/entities/AEntity'
import Control from '~/models/entities/events/tours/Control'

export default class Tour extends AEntity {
    active = true
    category = EEvent.Vereinsfahrt
    controls: Control[] = []
    images: GalleryEntry[] = []
    lastChange!: Date
    text!: string
    title!: string
    urls: Record<string, URL> = {}
}
