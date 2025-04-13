import AEntity from 'src/models/entities/AEntity'
import type Control from 'src/models/entities/events/tours/Control'
import EEvent from 'src/models/enums/EEvent'

export default class Tour extends AEntity {
  active = true
  category = EEvent.Vereinsfahrt
  controls: Control[] = []
  lastChange!: Date
  location!: Control
  text!: string
  title!: string
  urls: Record<string, URL> = {}
}
