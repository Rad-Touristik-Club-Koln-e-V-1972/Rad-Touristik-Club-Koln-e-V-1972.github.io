import { Model } from 'pinia-orm'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import { Attr, BelongsTo, Num, Str } from 'pinia-orm/decorators'
import FeeGroup from 'src/models/entities/FeeGroup'

// noinspection JSClassNamingConvention
export default class Fee extends Model {
  static override readonly entity = 'fees'
  @Uid() declare id: string

  @Attr() declare feeGroupId: number
  @BelongsTo(() => FeeGroup, 'feeGroupId') declare feeGroup: FeeGroup

  @Str('', { notNullable: true }) declare name: string
  @Num(0) declare price: number
}
