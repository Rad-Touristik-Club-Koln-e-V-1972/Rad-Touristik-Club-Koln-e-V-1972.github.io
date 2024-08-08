import { Model } from 'pinia-orm'
import { Attr, MorphMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'

export default class GuestbookEntry extends Model {
  static override readonly entity = 'guestbookEntries'
  @Uid() declare id: string

  @MorphMany(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntries: GalleryAlbumEntry[]

  @Str('', { notNullable: true }) declare answer: string
  @Attr(EEvent.RTC) declare category: EEvent
  @Attr() declare date: Date
  @Str('', { notNullable: true }) declare location: string
  @Str('', { notNullable: true }) declare name: string
  @Str('', { notNullable: true }) declare organization: string
  @Attr(ESource['E-Mail']) declare source: ESource
  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string

  static override readonly saving = (model: GuestbookEntry) => {
    model.text = model.text.replaceAll('\n', '<br>')

    return true
  }
}
