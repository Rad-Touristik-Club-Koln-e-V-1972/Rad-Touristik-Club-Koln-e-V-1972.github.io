import AEntity from '~/models/entities/AEntity'
import EEvent from '~/models/enums/EEvent'

export default class Event extends AEntity {
    category = EEvent.RTC
    clubPoints?: number
    color = 'primary'
    contact = ''
    end?: Date
    name = ''
    start!: Date
    timed = false
    url?: URL
}
