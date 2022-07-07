import EEvent from '@/models/enums/EEvent'
import ESource from '@/models/enums/guestbook/ESource'

export default class Entry {
    answer = ``
    date?: Date
    event = EEvent.RTC
    imageUrls: string[] = []
    location = ''
    name = ''
    organization = ''
    source = ESource['E-Mail']
    text = ``
    title = ''
}
