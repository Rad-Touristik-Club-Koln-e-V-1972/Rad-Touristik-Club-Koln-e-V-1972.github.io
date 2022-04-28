import Source from '@/models/enums/guestbook/Source'

export default class Entry {
    date: string = ''
    links: string[] = []
    name: string = ''
    pictures: string[] = []
    source: Source = Source['E-Mail']
    text: string = ``
    title: string = ''
}
