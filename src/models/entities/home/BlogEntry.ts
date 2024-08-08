import { Model } from 'pinia-orm'
import { Attr, HasMany, Str } from 'pinia-orm/decorators'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class BlogEntry extends Model {
  static override readonly entity = 'blogEntries'

  @HasMany(() => Gallery, 'blogEntryId') declare galleries: Gallery[]

  @Attr(null) declare end: Date | null
  @Attr() declare start: Date
  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string
}
