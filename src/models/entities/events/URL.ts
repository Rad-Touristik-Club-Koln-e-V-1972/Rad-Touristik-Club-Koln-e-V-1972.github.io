import { Model } from 'pinia-orm'
import { Attr, MorphTo, Str, Uid } from 'pinia-orm/decorators'
import Track from 'src/models/entities/events/tours/events/Track'
import Tour from 'src/models/entities/events/tours/Tour'

// noinspection JSClassNamingConvention
export default class URL extends Model {
  static readonly entity = 'urls'

  @Uid() declare urlableId: string
  @Str('', { notNullable: true }) declare urlableType: string
  @MorphTo(() => [Tour, Track], 'urlableId', 'urlableType') declare urlable: Tour | Track

  @Str(null) declare text: string | null
  @Attr() declare url: URL
}
