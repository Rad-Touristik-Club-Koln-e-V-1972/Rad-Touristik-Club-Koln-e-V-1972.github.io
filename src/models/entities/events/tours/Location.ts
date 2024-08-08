import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str, Uid } from 'pinia-orm/decorators'
import Tour from 'src/models/entities/events/tours/Tour'

export default class Location extends Model {
  static override readonly entity = 'locations'

  @Uid() declare tourId: string
  @BelongsTo(() => Tour, 'tourId') declare tour: Tour

  @Str('', { notNullable: true }) declare city: string
  @Str('', { notNullable: true }) declare street: string
  @Attr(null) declare url: URL | null
  @Str('', { notNullable: true }) declare title: string
  @Str('', { notNullable: true }) declare zipCode: string
}
