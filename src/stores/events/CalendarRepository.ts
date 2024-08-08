import { Repository } from 'pinia-orm'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import EEvent from 'src/models/enums/EEvent'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

export default class CalendarRepository extends Repository<CalendarEvent> {
  override use = CalendarEvent

  allFuture = () => this.allFutureInternal().get()
  allNotCancelled = () => this.where((it) => it.category !== EEvent.Abgesagt).get()
  allSortedByDate = () => this.allSortedByDateInternal().get()
  nextRTF = () =>
    this.allFutureInternal()
      .where((it) => it.category !== EEvent.RTF)
      .first()
  nextEvents = () =>
    this.allFutureInternal()
      .where((model) => ![EEvent.Abgesagt, EEvent.Feiertag, EEvent.Mitgliederversammlung].includes(model.category))
      .limit(2)
      .get()

  private allFutureInternal = () => this.allSortedByDateInternal().where((it) => it.time.start > dateTime.today.value)
  private allSortedByDateInternal = () => this.with('time').orderBy((it: CalendarEvent) => it.time.start)
}
