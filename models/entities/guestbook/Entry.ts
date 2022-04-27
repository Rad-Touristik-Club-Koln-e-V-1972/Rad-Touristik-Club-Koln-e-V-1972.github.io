import Source from '@/models/enums/guestbook/Source'

export default class Entry {
    date: String = ''
    name: String = ''
    source: Source = Source['E-Mail']
    text: String = ''
    title: String = ''
}
