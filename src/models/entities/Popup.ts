import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Tour from 'src/models/entities/events/tours/Tour'

export default class Popup extends Model {
  static override readonly entity = 'popups'
  @Uid() declare id: string

  @Attr() declare tourId: string
  @BelongsTo(() => Tour, 'tourId') declare tour: Tour

  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string

  static override readonly saving = (model: Popup) => {
    model.text = model.text.replaceAll('\n', '<br>')

    return true
  }
}
