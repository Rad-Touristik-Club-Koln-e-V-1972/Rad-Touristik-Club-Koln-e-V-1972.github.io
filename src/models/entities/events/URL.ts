import { Model } from 'pinia-orm'
import { Attr, MorphTo, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Permanent from 'src/models/entities/events/tours/Permanent'
import Track from 'src/models/entities/events/tours/events/Track'

// noinspection JSClassNamingConvention
export default class URL extends Model {
  static override readonly entity = 'urls'
  @Uid() declare id: string

  @Attr() declare urlableId: string
  @Str('', { notNullable: true }) declare urlableType: string
  @MorphTo(() => [Permanent, Track], 'urlableId', 'urlableType') declare urlable: Permanent | Track

  @Str(null) declare text: string | null
  @Attr() declare url: URL
}
