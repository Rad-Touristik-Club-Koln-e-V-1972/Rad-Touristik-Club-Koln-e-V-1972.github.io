import AEntity from '~/models/entities/AEntity'
import EEvent from '~/models/enums/EEvent'

export default class Event extends AEntity {
    category = EEvent.RTC
    clubPoints: number | null = null
    color = 'primary'
    contact!: string
    end: Date | null = null
    name!: string
    start!: Date
    timed = false
    url: URL | null = null
}
