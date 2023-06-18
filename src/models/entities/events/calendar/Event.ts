import AEntity from 'src/models/entities/AEntity'
import EEvent from 'src/models/enums/EEvent'

export default class Event extends AEntity {
    allDay = true
    category = EEvent.RTC
    clubPoints: number | null = null
    color = 'primary'
    contact!: string
    end: Date | null = null
    name!: string
    start!: Date
    url: URL | null = null
}
