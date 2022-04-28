import Entry from '@/models/entities/guestbook/Entry'
import Source from '@/models/enums/guestbook/Source'

export default class EntryBuilder {
    private readonly value: Entry

    constructor() {
        this.value = new Entry()
    }

    answer(value: string): EntryBuilder {
        this.value.answer = value
        return this
    }

    date(value: string): EntryBuilder {
        this.value.date = value
        return this
    }

    location(value: string): EntryBuilder {
        this.value.location = value
        return this
    }

    name(value: string): EntryBuilder {
        this.value.name = value
        return this
    }

    organization(value: string): EntryBuilder {
        this.value.organization = value
        return this
    }

    pictures(value: string[]): EntryBuilder {
        this.value.pictures = value
        return this
    }

    source(value: Source): EntryBuilder {
        this.value.source = value
        return this
    }

    text(value: string): EntryBuilder {
        this.value.text = value
        return this
    }

    title(value: string): EntryBuilder {
        this.value.title = value
        return this
    }

    build(): Entry {
        return this.value
    }
}
