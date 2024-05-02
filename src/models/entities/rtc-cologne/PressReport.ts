import { Model } from 'pinia-orm'
import { Attr, MorphMany, Str } from 'pinia-orm/decorators'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class PressReport extends Model {
  static readonly entity = 'contacts'

  @MorphMany(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntries: GalleryAlbumEntry[]

  @Attr() declare date: Date
  @Str('', { notNullable: true }) declare title: string
}
