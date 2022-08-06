import GuestbookEntry from '~/models/entities/about-us/guestbook/GuestbookEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'

export default class GuestbookEntryBuilder {
    private readonly value: GuestbookEntry

    constructor() {
        this.value = new GuestbookEntry()
    }

    answer(value: string): GuestbookEntryBuilder {
        this.value.answer = value

        return this
    }

    category(value: EEvent): GuestbookEntryBuilder {
        this.value.category = value

        return this
    }

    date(value: string): GuestbookEntryBuilder {
        this.value.date = new Date(value)

        return this
    }

    imageUrls(...value: string[]): GuestbookEntryBuilder {
        this.value.imageUrls = value.map((it) => new GalleryEntryBuilder().imageUrl(it).build())

        return this
    }

    location(value: string): GuestbookEntryBuilder {
        this.value.location = value

        return this
    }

    name(value: string): GuestbookEntryBuilder {
        this.value.name = value

        return this
    }

    organization(value: string): GuestbookEntryBuilder {
        this.value.organization = value

        return this
    }

    source(value: ESource): GuestbookEntryBuilder {
        this.value.source = value

        return this
    }

    text(value: string): GuestbookEntryBuilder {
        this.value.text = value

        return this
    }

    title(value: string): GuestbookEntryBuilder {
        this.value.title = value

        return this
    }

    build(): GuestbookEntry {
        return this.value
    }
}
