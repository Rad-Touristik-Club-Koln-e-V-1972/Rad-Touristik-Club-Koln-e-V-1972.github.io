import ABuilder from '~/models/builder/ABuilder'
import GuestbookEntry from '~/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/rtc-cologne/guestbook/ESource'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default class GuestbookEntryBuilder extends ABuilder<GuestbookEntry> {
    private answer!: string
    private category = EEvent.RTC
    private date!: Date
    private imageUrls: string[] = []
    private location!: string
    private name!: string
    private organization!: string
    private source = ESource['E-Mail']
    private text!: string
    private title!: string

    build() {
        return {
            answer: this.answer,
            category: this.category,
            date: this.date,
            id: this.id,
            imageUrls: this.imageUrls.map((it) => new GalleryEntryBuilder().setId('ce9e89f9-7d6a-491c-8848-be2032546c6e').setImageUrl(it).build()),
            location: this.location,
            name: this.name,
            organization: this.organization,
            source: this.source,
            text: this.text,
            title: this.title,
        } satisfies GuestbookEntry
    }

    setAnswer(value: string): GuestbookEntryBuilder {
        this.answer = value

        return this
    }

    setCategory(value: EEvent): GuestbookEntryBuilder {
        this.category = value

        return this
    }

    setDate(value: string): GuestbookEntryBuilder {
        this.date = new Date(value)

        return this
    }

    setImageUrls(...value: string[]): GuestbookEntryBuilder {
        this.imageUrls = value

        return this
    }

    setLocation(value: string): GuestbookEntryBuilder {
        this.location = value

        return this
    }

    setName(value: string): GuestbookEntryBuilder {
        this.name = value

        return this
    }

    setOrganization(value: string): GuestbookEntryBuilder {
        this.organization = value

        return this
    }

    setSource(value: ESource): GuestbookEntryBuilder {
        this.source = value

        return this
    }

    setText(value: string): GuestbookEntryBuilder {
        this.text = value

        return this
    }

    setTitle(value: string): GuestbookEntryBuilder {
        this.title = value

        return this
    }
}
