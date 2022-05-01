import EEvent from '@/models/enums/EEvent'

export default class Event {
    category = EEvent.Standard
    color: string = 'primary'
    end?: Date
    name = ''
    start!: Date
    timed = false
}
