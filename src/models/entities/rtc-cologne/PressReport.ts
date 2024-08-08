import { Model } from 'pinia-orm'
import { Attr, MorphMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class PressReport extends Model {
  static override readonly entity = 'contacts'
  @Uid() declare id: string

  @MorphMany(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntries: GalleryAlbumEntry[]

  @Attr() declare date: Date
  @Str('', { notNullable: true }) declare title: string
}
