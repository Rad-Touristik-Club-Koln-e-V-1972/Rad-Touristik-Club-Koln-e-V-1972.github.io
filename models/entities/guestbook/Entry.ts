import EventType from '@/models/enums/guestbook/EventType'
import SourceType from '@/models/enums/guestbook/SourceType'

export default class Entry {
    answer = ``
    date?: Date
    event = EventType.Standard
    location = ''
    name = ''
    organization = ''
    pictures: string[] = []
    source = SourceType['E-Mail']
    text = ``
    title = ''
}
