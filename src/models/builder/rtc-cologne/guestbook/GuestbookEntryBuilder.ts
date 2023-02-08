import ABuilder from '~/models/builder/ABuilder'
import GuestbookEntry from '~/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/rtc-cologne/guestbook/ESource'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default class GuestbookEntryBuilder extends ABuilder<GuestbookEntry> {
    private entity = new GuestbookEntry()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setAnswer(value: string): GuestbookEntryBuilder {
        this.entity.answer = value

        return this
    }

    setCategory(value: EEvent): GuestbookEntryBuilder {
        this.entity.category = value

        return this
    }

    setDate(value: string): GuestbookEntryBuilder {
        this.entity.date = new Date(value)

        return this
    }

    setImageUrls(value: Record<string, string>): GuestbookEntryBuilder {
        for (const id in Object.keys(value)) {
            this.entity.imageUrls.push(new GalleryEntryBuilder().setId(id).setImageUrl(value[id]).build())
        }

        return this
    }

    setLocation(value: string): GuestbookEntryBuilder {
        this.entity.location = value

        return this
    }

    setName(value: string): GuestbookEntryBuilder {
        this.entity.name = value

        return this
    }

    setOrganization(value: string): GuestbookEntryBuilder {
        this.entity.organization = value

        return this
    }

    setSource(value: ESource): GuestbookEntryBuilder {
        this.entity.source = value

        return this
    }

    setText(value: string): GuestbookEntryBuilder {
        this.entity.text = value

        return this
    }

    setTitle(value: string): GuestbookEntryBuilder {
        this.entity.title = value

        return this
    }
}
