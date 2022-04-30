import Event from '@/models/enums/guestbook/Event'
import Source from '@/models/enums/guestbook/Source'

export default class Entry {
    answer: string = ``
    date?: Date
    event: Event = Event.Standard
    location: string = ''
    name: string = ''
    organization: string = ''
    pictures: string[] = []
    source: Source = Source['E-Mail']
    text: string = ``
    title: string = ''
}
