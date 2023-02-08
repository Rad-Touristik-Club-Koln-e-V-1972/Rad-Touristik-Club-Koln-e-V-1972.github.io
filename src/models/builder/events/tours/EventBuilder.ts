import TourBuilder from '~/models/builder/events/TourBuilder'
import Event from '~/models/entities/events/tours/Event'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'

export default class EventBuilder extends TourBuilder<Event> {
    private entity = new Event()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setFees(...value: Fee[]): EventBuilder {
        this.entity.fees = value

        return this
    }

    setTimes(...value: Time[]): EventBuilder {
        this.entity.times = value

        return this
    }

    setTracks(...value: Track[]): EventBuilder {
        this.entity.tracks = value

        return this
    }
}
