import AEntity from '~/models/entities/AEntity'
import Control from '~/models/entities/events/tours/Control'
import Popup from '~/models/entities/Popup'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'

export default class Tour extends AEntity {
    active = true
    category = EEvent.Vereinsfahrt
    controls: Control[] = []
    images: GalleryEntry[] = []
    lastChange!: Date
    location!: Control
    popup?: Popup
    text!: string
    title!: string
    urls: Record<string, URL> = {}
}
