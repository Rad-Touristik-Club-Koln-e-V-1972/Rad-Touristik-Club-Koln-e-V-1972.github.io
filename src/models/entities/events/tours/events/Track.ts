import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Bool, MorphMany, MorphOne, Num, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Time from 'src/models/entities/events/Time'
import URL from 'src/models/entities/events/URL'
import Event from 'src/models/entities/events/tours/Event'
import EProfile from 'src/models/enums/events/EProfile'

export default class Track extends Model {
  static override readonly entity = 'tracks'
  @Uid() declare id: string

  @MorphOne(() => Time, 'timeableId', 'timeableType') declare time: Time
  @Attr() declare eventId: string
  @BelongsTo(() => Event, 'eventId') declare event: Event
  @MorphMany(() => URL, 'urlableId', 'urlableType') declare urls: URL[]

  @Num(0, { notNullable: true }) declare controls: number
  @Num(0, { notNullable: true }) declare height: number
  @Bool(false) declare important: boolean
  @Num(0, { notNullable: true }) declare length: number
  @Attr(EProfile.Normal) declare profile: EProfile
  @Str('', { notNullable: true }) declare text: string
}
