import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import AEntity from '~/models/entities/AEntity'
import Control from '~/models/entities/events/tours/Control'
import Popup from '~/models/entities/Popup'

export default class Tour extends AEntity {
    category = EEvent.Vereinsfahrt
    controls: Control[] = []
    images: GalleryEntry[] = []
    lastChange: Date = new Date()
    popup?: Popup
    text = ''
    title = ''
    urls: Record<string, URL> = {}
}
