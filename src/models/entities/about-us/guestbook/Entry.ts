import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'

export default class Entry {
    answer = ``
    category = EEvent.RTC
    date = new Date()
    imageUrls: string[] = []
    location = ''
    name = ''
    organization = ''
    source = ESource['E-Mail']
    text = ``
    title = ''
}
