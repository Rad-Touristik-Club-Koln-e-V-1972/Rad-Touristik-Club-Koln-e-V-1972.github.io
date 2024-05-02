import { Model } from 'pinia-orm'
import { BelongsTo, Str, Uid } from 'pinia-orm/decorators'
import Tour from 'src/models/entities/events/tours/Tour'

export default class Popup extends Model {
  static readonly entity = 'popups'

  @Uid() declare tourId: string
  @BelongsTo(() => Tour, 'tourId') declare tour: Tour

  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string
}
