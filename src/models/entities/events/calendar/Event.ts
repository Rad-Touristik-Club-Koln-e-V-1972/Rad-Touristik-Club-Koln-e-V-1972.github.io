import AEntity from 'src/models/entities/AEntity'
import EEvent from 'src/models/enums/EEvent'

export default class Event extends AEntity {
  allDay = true
  category = EEvent.RTC
  color = 'primary'
  contact!: string
  end?: Date
  kilometer = 0
  name!: string
  start!: Date
  url?: URL
}
