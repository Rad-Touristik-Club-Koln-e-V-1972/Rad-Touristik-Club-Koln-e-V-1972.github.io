import { Model } from 'pinia-orm'
import { Attr, BelongsTo, HasMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Fee from 'src/models/entities/Fee'
import EFeeGroup from 'src/models/enums/EFeeGroup'
import Event from 'src/models/entities/events/tours/Event'

export default class FeeGroup extends Model {
  static override readonly entity = 'feeGroups'
  @Uid() declare id: string

  @Attr(null) declare eventId: number | null
  @BelongsTo(() => Event, 'eventId') declare event: Event | null
  @HasMany(() => Fee, 'feeGroupId') declare fees: Fee[]

  @Attr(EFeeGroup.RTF) declare category: EFeeGroup
  @Str('', { notNullable: true }) declare name: string
  @Str(null) declare text: string | null
}
