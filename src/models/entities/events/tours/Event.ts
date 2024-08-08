import { Attr, HasMany, MorphMany } from 'pinia-orm/decorators'
import Time from 'src/models/entities/events/Time'
import Tour from 'src/models/entities/events/tours/Tour'
import Track from 'src/models/entities/events/tours/events/Track'
import FeeGroup from 'src/models/entities/FeeGroup'
import EEvent from 'src/models/enums/EEvent'

export default class Event extends Tour {
  static override readonly baseEntity = 'tours'
  static override readonly entity = 'events'
  static override readonly fields = () => ({ ...super.schemas[super.entity] })

  @Attr(EEvent.RTF) declare category: EEvent
  @HasMany(() => FeeGroup, 'eventId') declare feeGroups: FeeGroup[]
  @MorphMany(() => Time, 'timeableId', 'timeableType') declare times: Time[]
  @HasMany(() => Track, 'eventId') declare tracks: Track[]
}
