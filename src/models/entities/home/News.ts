import { Model } from 'pinia-orm'
import { Attr, MorphOne, Str } from 'pinia-orm/decorators'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class News extends Model {
  static override readonly entity = 'news'

  @MorphOne(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntry: GalleryAlbumEntry

  @Attr(null) declare showUntil: Date | null
  @Str('', { notNullable: true }) declare text: string
}
