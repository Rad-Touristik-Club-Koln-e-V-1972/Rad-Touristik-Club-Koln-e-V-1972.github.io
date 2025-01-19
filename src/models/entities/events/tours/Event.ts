import Tour from 'src/models/entities/events/tours/Tour'
import type Fee from 'src/models/entities/events/tours/events/Fee'
import type Time from 'src/models/entities/events/tours/events/Time'
import type Track from 'src/models/entities/events/tours/events/Track'

export default class Event extends Tour {
  fees: Fee[] = []
  times: Time[] = []
  tracks: Track[] = []
}
