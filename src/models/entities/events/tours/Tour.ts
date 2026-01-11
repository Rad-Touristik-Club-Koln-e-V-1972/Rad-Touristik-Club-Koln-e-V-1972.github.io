import AEntity from 'src/models/entities/AEntity'
import type Donation from 'src/models/entities/Donation'
import type Control from 'src/models/entities/events/tours/Control'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from 'src/models/enums/EEvent'

export default class Tour extends AEntity {
  active = true
  category = EEvent.Vereinsfahrt
  controls: Control[] = []
  donations: Donation[] = []
  images: GalleryEntry[] = []
  lastChange!: Date
  location!: Control
  text!: string
  title!: string
  urls: Record<string, URL> = {}
}
