import Fee from 'src/models/entities/events/tours/Fee'
import Time from 'src/models/entities/events/tours/Time'
import Tour from 'src/models/entities/events/tours/Tour'
import Track from 'src/models/entities/events/tours/Track'

export default class Event extends Tour {
  fees: Fee[] = []
  times: Time[] = []
  tracks: Track[] = []
}
