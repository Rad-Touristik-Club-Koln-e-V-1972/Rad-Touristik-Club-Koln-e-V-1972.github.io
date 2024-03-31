import Tour from 'src/models/entities/events/Tour'
import Fee from 'src/models/entities/events/tours/events/Fee'
import Time from 'src/models/entities/events/tours/events/Time'
import Track from 'src/models/entities/events/tours/events/Track'

export default class Event extends Tour {
  fees: Fee[] = []
  times: Time[] = []
  tracks: Track[] = []
}
