import ABuilder from 'src/models/builder/ABuilder'
import GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default class GuestbookEntryBuilder extends ABuilder {
    private entity = new GuestbookEntry()

    build = () => Object.assign(this.entity, super.build())

    setAnswer = (value: string): this => {
        this.entity.answer = value

        return this
    }

    setCategory = (value: EEvent): this => {
        this.entity.category = value

        return this
    }

    setDate = (value: string): this => {
        this.entity.date = new Date(value)

        return this
    }

    setImageUrls = (value: Record<string, string>): this => {
        for (const id of Object.keys(value)) {
            this.entity.imageUrls.push(new GalleryEntryBuilder().setId(id).setImageUrl(value[id]).build())
        }

        return this
    }

    setLocation = (value: string): this => {
        this.entity.location = value

        return this
    }

    setName = (value: string): this => {
        this.entity.name = value

        return this
    }

    setOrganization = (value: string): this => {
        this.entity.organization = value

        return this
    }

    setSource = (value: ESource): this => {
        this.entity.source = value

        return this
    }

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }
}
