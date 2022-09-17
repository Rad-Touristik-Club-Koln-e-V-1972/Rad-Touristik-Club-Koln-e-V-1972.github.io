import AEntity from '~/models/entities/AEntity'
import Control from '~/models/entities/events/tours/Control'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

export default class Tour extends AEntity {
    category = EEvent.Vereinsfahrt
    controls: Control[] = []
    images: GalleryEntry[] = []
    lastChange: Date = new Date()
    text = ''
    title = ''
    urls: Record<string, URL> = {}
}
