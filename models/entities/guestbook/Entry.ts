import EEvent from '@/models/enums/guestbook/EEvent'
import ESource from '@/models/enums/guestbook/ESource'

export default class Entry {
    answer = ``
    date?: Date
    event = EEvent.Standard
    location = ''
    name = ''
    organization = ''
    pictures: string[] = []
    source = ESource['E-Mail']
    text = ``
    title = ''
}
