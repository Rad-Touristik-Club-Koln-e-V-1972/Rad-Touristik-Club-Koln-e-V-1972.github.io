import Event from '@/models/enums/guestbook/Event'
import Source from '@/models/enums/guestbook/Source'

export default class Entry {
    answer = ``
    date?: Date
    event = Event.Standard
    location = ''
    name = ''
    organization = ''
    pictures: string[] = []
    source = Source['E-Mail']
    text = ``
    title = ''
}
