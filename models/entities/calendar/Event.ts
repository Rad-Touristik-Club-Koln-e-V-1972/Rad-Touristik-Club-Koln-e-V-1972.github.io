import * as URL from 'url'
import EEvent from '@/models/enums/EEvent'

export default class Event {
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
