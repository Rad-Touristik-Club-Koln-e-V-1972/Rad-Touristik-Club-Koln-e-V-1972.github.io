import { Model } from 'pinia-orm'
import { MorphOne, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class Contact extends Model {
  static override readonly entity = 'contacts'
  @Uid() declare id: string

  @MorphOne(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntry: GalleryAlbumEntry

  @Str('', { notNullable: true }) declare eMail: string
  @Str('', { notNullable: true }) declare name: string
  @Str('', { notNullable: true }) declare position: string
}
