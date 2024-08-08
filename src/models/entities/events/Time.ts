import { Model } from 'pinia-orm'
import { Attr, MorphTo, Str, Uid } from 'pinia-orm/decorators'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import Event from 'src/models/entities/events/tours/Event'
import Track from 'src/models/entities/events/tours/events/Track'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class Time extends Model {
  static override readonly entity = 'times'

  @Uid() declare timeableId: string
  @Str('', { notNullable: true }) declare timeableType: string
  @MorphTo(() => [CalendarEvent, Event, Gallery, Track], 'timeableId', 'timeableType') declare timeable: CalendarEvent | Event | Gallery | Track

  @Attr(null) declare end: string | null
  @Str('', { notNullable: true }) declare name: string
  @Attr() declare start: string
}
