import { Model } from 'pinia-orm'
import { Attr, HasMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class BlogEntry extends Model {
  static override readonly entity = 'blogEntries'
  @Uid() declare id: string

  @HasMany(() => Gallery, 'blogEntryId') declare galleries: Gallery[]

  @Attr(null) declare end: Date | null
  @Attr() declare start: Date
  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string

  static override readonly saving = (model: BlogEntry) => {
    model.text = model.text.replaceAll('\n', '<br>')

    return true
  }
}
