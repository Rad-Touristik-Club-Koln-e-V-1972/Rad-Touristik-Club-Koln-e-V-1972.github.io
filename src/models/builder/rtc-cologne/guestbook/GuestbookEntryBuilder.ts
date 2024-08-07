import ABuilder from 'src/models/builder/ABuilder'
import GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default class GuestbookEntryBuilder extends ABuilder {
  private guestbookEntry = new GuestbookEntry()

  buildGuestbookEntry = () => Object.assign(this.guestbookEntry, this.buildAEntity())

  setAnswer = (value: string): this => {
    this.guestbookEntry.answer = value

    return this
  }

  setCategory = (value: EEvent): this => {
    this.guestbookEntry.category = value

    return this
  }

  setDate = (value: string): this => {
    this.guestbookEntry.date = new Date(value)

    return this
  }

  setImageUrls = (value: Record<string, string>): this => {
    for (const [key, data] of Object.entries(value)) this.guestbookEntry.imageUrls.push(new GalleryEntryBuilder().setId(key).setImageUrl(data).buildGalleryEntry())

    return this
  }

  setLocation = (value: string): this => {
    this.guestbookEntry.location = value

    return this
  }

  setName = (value: string): this => {
    this.guestbookEntry.name = value

    return this
  }

  setOrganization = (value: string): this => {
    this.guestbookEntry.organization = value

    return this
  }

  setSource = (value: ESource): this => {
    this.guestbookEntry.source = value

    return this
  }

  setText = (value: string): this => {
    this.guestbookEntry.text = value.replaceAll('\n', '<br>')

    return this
  }

  setTitle = (value: string): this => {
    this.guestbookEntry.title = value

    return this
  }
}
