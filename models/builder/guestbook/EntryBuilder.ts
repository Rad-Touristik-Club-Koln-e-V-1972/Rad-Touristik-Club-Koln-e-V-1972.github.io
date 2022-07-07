import EEvent from '@/models/enums/EEvent'
import Entry from '@/models/entities/guestbook/Entry'
import ESource from '@/models/enums/guestbook/ESource'

export default class EntryBuilder {
    private readonly value: Entry

    constructor() {
        this.value = new Entry()
    }

    answer(value: string): EntryBuilder {
        this.value.answer = value
        return this
    }

    // If some dates are not saved with hh:mm they'll trigger a NaN-error.
    date(year: number, month: number, date: number = 1, hours: number = 0, minutes: number = 0): EntryBuilder {
        // The month value is 0-11. We need an offset.
        this.value.date = new Date(year, month - 1, date, hours, minutes)
        return this
    }

    event(value: EEvent): EntryBuilder {
        this.value.event = value
        return this
    }

    imageUrl(value: string): EntryBuilder {
        this.value.imageUrls.push(value)
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

    source(value: ESource): EntryBuilder {
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
