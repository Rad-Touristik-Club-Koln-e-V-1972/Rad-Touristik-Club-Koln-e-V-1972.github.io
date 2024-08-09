import { Attr, HasMany, MorphMany, Num } from 'pinia-orm/decorators'
import Location from 'src/models/entities/events/tours/Location'
import Tour from 'src/models/entities/events/tours/Tour'
import URL from 'src/models/entities/events/URL'
import EProfile from 'src/models/enums/events/EProfile'
import EEvent from 'src/models/enums/EEvent'

export default class Permanent extends Tour {
  static override readonly baseEntity = 'tours'
  static override readonly entity = 'permanent'
  static override readonly fields = () => ({ ...super.schemas[super.entity] })

  @HasMany(() => Location, 'tourId') declare controls: Location[]
  @MorphMany(() => URL, 'urlableId', 'urlableType') declare urls: URL[]

  @Attr(EEvent.Permanente) declare category: EEvent
  @Num(0, { notNullable: true }) declare height: number
  @Num(0, { notNullable: true }) declare length: number
  @Attr(EProfile.Wellig) declare profile: EProfile
}
