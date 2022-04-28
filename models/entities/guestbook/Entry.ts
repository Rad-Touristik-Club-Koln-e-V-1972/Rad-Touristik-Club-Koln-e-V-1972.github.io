import Source from '@/models/enums/guestbook/Source'

export default class Entry {
    date: string = ''
    links: string[] = []
    location: string = ''
    name: string = ''
    organization: string = ''
    pictures: string[] = []
    source: Source = Source['E-Mail']
    text: string = ``
    title: string = ''
}
