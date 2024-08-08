import { Model } from 'pinia-orm'
import { Attr, MorphOne, Num, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import Time from 'src/models/entities/events/Time'
import EEvent from 'src/models/enums/EEvent'

export default class CalendarEvent extends Model {
  static override readonly entity = 'calendarEvents'
  @Uid() declare id: string

  @MorphOne(() => Time, 'timeableId', 'timeableType') declare time: Time

  @Attr(EEvent.RTC) declare category: EEvent
  @Str('primary') declare color: string
  @Str('', { notNullable: true }) declare contact: string
  @Num(null) declare kilometer: number | null
  @Str(null) declare provisionalReason: string | null
  @Attr(null) declare url: URL | null

  static override readonly saving = (model: CalendarEvent) => {
    switch (model.category) {
      case EEvent.Abgesagt:
        model.color = 'grey'
        break
      case EEvent.CTF:
      case EEvent.Marathon:
        model.color = 'blue'
        break
      case EEvent.Feiertag:
        model.color = 'secondary'
        break
      case EEvent.Mitgliederversammlung:
        model.color = 'green'
        break
      case EEvent.Permanente:
        model.color = 'red'
        break
      case EEvent.RTF:
        model.color = 'deep-purple'
        break
      case EEvent.Veranstaltung:
        model.color = 'pink darken-3'
        break
      case EEvent.RTC:
      case EEvent.Vereinsfahrt:
      default:
        model.color = 'primary'
    }

    return true
  }
}
