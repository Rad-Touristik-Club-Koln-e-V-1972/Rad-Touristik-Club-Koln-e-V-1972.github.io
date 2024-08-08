import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Tour from 'src/models/entities/events/tours/Tour'

export default class Location extends Model {
  static override readonly entity = 'locations'
  @Uid() declare id: string

  @Attr() declare tourId: string
  @BelongsTo(() => Tour, 'tourId') declare tour: Tour

  @Str('', { notNullable: true }) declare city: string
  @Str('', { notNullable: true }) declare street: string
  @Attr(null) declare url: URL | null
  @Str('', { notNullable: true }) declare title: string
  @Str('', { notNullable: true }) declare zipCode: string
}
