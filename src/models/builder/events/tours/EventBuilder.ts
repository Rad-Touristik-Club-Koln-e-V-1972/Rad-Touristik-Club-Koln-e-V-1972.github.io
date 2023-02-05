import TourBuilder from '~/models/builder/events/TourBuilder'
import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/tours/Event'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'

export default class EventBuilder extends TourBuilder<Event> {
    private fees: Fee[] = []
    private times: Time[] = []
    private tracks: Track[] = []

    build() {
        return Object.assign(super.build(), {
            category: EEvent.RTF,
            fees: this.fees,
            times: this.times,
            tracks: this.tracks,
        }) satisfies Event
    }

    setFees(...value: Fee[]): EventBuilder {
        this.fees = value

        return this
    }

    setTimes(...value: Time[]): EventBuilder {
        this.times = value

        return this
    }

    setTracks(...value: Track[]): EventBuilder {
        this.tracks = value

        return this
    }
}
