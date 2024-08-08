import { Model } from 'pinia-orm'
import { Attr, Bool, MorphTo, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import Event from 'src/models/entities/events/tours/Event'
import Track from 'src/models/entities/events/tours/events/Track'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class Time extends Model {
  static override readonly entity = 'times'
  @Uid() declare id: string

  @Attr() declare timeableId: string
  @Str('', { notNullable: true }) declare timeableType: string
  @MorphTo(() => [CalendarEvent, Event, Gallery, Track], 'timeableId', 'timeableType') declare timeable: CalendarEvent | Event | Gallery | Track

  @Bool(true) declare allDay: boolean
  @Attr(null) declare end: Date | null
  @Str('', { notNullable: true }) declare name: string
  @Attr(new Date()) declare start: Date
  @Attr(null) declare startText: string | null
}
