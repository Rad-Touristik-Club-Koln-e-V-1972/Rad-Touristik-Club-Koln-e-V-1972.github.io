import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import GuestbookEntry from '~/models/entities/about-us/guestbook/GuestbookEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'

export default class GuestbookEntryBuilder extends ABuilder<GuestbookEntry> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private answer!: string
    private category = EEvent.RTC
    private date!: string
    private imageUrls?: string[]
    private location!: string
    private name!: string
    private organization!: string
    private source = ESource['E-Mail']
    private text!: string
    private title!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                answer: this.answer,
                category: this.category,
                date: new Date(this.date),
                imageUrls: this.imageUrls?.map((it) => new GalleryEntryBuilder().setImageUrl(it).build()) ?? [],
                location: this.location,
                name: this.name,
                organization: this.organization,
                source: this.source,
                text: this.text,
                title: this.title,
            },
            new AEntity(this.id)
        ) as GuestbookEntry
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
        this.date = value

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
