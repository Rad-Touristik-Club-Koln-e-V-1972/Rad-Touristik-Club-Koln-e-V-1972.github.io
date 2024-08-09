import { Model } from 'pinia-orm'
import { BelongsTo, Num, Str } from 'pinia-orm/decorators'
import FeeGroup from 'src/models/entities/FeeGroup'

// noinspection JSClassNamingConvention
export default class Fee extends Model {
  static override readonly entity = 'fees'

  @Attr() declare feeGroupId: number
  @BelongsTo(() => FeeGroup, 'feeGroupId') declare user: FeeGroup

  @Str('', { notNullable: true }) declare name: string
  @Num(0) declare price: number
}
