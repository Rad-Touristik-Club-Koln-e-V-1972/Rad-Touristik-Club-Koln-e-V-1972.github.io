import { Repository } from 'pinia-orm'
import Event from 'src/models/entities/events/tours/Event'
import EEvent from 'src/models/enums/EEvent'

export default class EventsRepository extends Repository<Event> {
  override use = Event

  getByCategory = (category: EEvent) => this.where((it) => it.category === category).first()
}
