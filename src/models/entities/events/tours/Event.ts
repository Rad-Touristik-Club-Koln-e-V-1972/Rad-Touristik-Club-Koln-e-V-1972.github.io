import { HasMany, MorphMany } from 'pinia-orm/decorators'
import Time from 'src/models/entities/events/Time'
import Tour from 'src/models/entities/events/tours/Tour'
import Track from 'src/models/entities/events/tours/events/Track'
import FeeGroup from 'src/models/entities/FeeGroup'

export default class Event extends Tour {
  static readonly baseEntity = 'tours'
  static readonly entity = 'events'

  static fields() {
    return {
      ...super.schemas[super.entity],
    }
  }

  @HasMany(() => FeeGroup, 'eventId') declare feeGroups: FeeGroup[]
  @MorphMany(() => Time, 'timeableId', 'timeableType') declare times: Time[]
  @HasMany(() => Track, 'eventId') declare tracks: Track[]
}
