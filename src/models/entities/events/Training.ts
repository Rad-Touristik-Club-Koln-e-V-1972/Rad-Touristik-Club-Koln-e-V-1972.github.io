import { Model } from 'pinia-orm'
import { MorphMany, Str } from 'pinia-orm/decorators'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class Training extends Model {
  static readonly entity = 'trainings'

  @MorphMany(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntries: GalleryAlbumEntry[]

  @Str('', { notNullable: true }) declare alternativeDay: string
  @Str('', { notNullable: true }) declare day: string
  @Str('', { notNullable: true }) declare departure: string
  @Str('', { notNullable: true }) declare length: string
  @Str('', { notNullable: true }) declare location: string
  @Str('', { notNullable: true }) declare speed: string
  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string
}
