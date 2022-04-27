import Source from '@/models/enums/guestbook/Source'

export default class Guestbook {
    date: String
    name: String
    source: Source
    text: String
    title: String

    constructor(date: string, name: string, source: Source, text: string, title: string) {
        this.date = date
        this.name = name
        this.source = source
        this.text = text
        this.title = title
    }
}
