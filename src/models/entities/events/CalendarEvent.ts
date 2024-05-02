import { Model } from 'pinia-orm'
import { Attr, Bool, MorphOne, Num, Str } from 'pinia-orm/decorators'
import Time from 'src/models/entities/events/Time'
import EEvent from 'src/models/enums/EEvent'

export default class CalendarEvent extends Model {
  static readonly entity = 'calendarEvents'

  @MorphOne(() => Time, 'timeableId', 'timeableType') declare time: Time

  @Bool(true) declare allDay: boolean
  @Attr(EEvent.RTC) declare category: EEvent
  @Str('primary') declare color: string
  @Str('', { notNullable: true }) declare contact: string
  @Num(null) declare kilometer: number | null
  @Str(null) declare provisionalReason: string | null
  @Attr(null) declare url: URL | null
}
