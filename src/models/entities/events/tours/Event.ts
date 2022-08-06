import Tour from '~/models/entities/events/Tour'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'
import EEvent from '~/models/enums/EEvent'

export default class Event extends Tour {
    category = EEvent.RTF
    fees: Fee[] = []
    times: Time[] = []
    subtitle = ''
    tracks: Track[] = []
}
