import AEntity from 'src/models/entities/AEntity'
import type Control from 'src/models/entities/events/tours/Control'
import type Popup from 'src/models/entities/Popup'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from 'src/models/enums/EEvent'

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
