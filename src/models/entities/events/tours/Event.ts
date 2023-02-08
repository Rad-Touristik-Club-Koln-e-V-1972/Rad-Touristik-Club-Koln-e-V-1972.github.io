import Tour from '~/models/entities/events/Tour'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'

export default class Event extends Tour {
    fees: Fee[] = []
    times: Time[] = []
    tracks: Track[] = []
}
