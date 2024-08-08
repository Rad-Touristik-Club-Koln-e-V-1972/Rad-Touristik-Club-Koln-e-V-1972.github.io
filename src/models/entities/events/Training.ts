import { Model } from 'pinia-orm'
import { MorphMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class Training extends Model {
  static override readonly entity = 'trainings'
  @Uid() declare id: string

  @MorphMany(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntries: GalleryAlbumEntry[]

  @Str('', { notNullable: true }) declare alternativeDay: string
  @Str('', { notNullable: true }) declare day: string
  @Str('', { notNullable: true }) declare departure: string
  @Str('', { notNullable: true }) declare length: string
  @Str('', { notNullable: true }) declare location: string
  @Str('', { notNullable: true }) declare speed: string
  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string

  static override readonly saving = (model: Training) => {
    model.text = model.text.replaceAll('\n', '<br>')

    return true
  }
}
