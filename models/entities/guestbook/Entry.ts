import Source from '@/models/enums/guestbook/Source'

export default class Entry {
    answer: string = ``
    date: string = ''
    location: string = ''
    name: string = ''
    organization: string = ''
    pictures: string[] = []
    source: Source = Source['E-Mail']
    text: string = ``
    title: string = ''
}
