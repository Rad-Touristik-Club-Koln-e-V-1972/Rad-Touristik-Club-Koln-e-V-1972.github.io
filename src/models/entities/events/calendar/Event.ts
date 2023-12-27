import AEntity from 'src/models/entities/AEntity'
import EEvent from 'src/models/enums/EEvent'

export default class Event extends AEntity {
    allDay = true
    category = EEvent.RTC
    clubPoints = 0
    color = 'primary'
    contact!: string
    end: Date | null = null
    name!: string
    provisionalReason?: string
    start!: Date
    url: URL | null = null
}
