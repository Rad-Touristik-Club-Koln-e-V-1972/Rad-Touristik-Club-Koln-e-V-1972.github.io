import TourBuilder from 'src/models/builder/events/TourBuilder'
import Event from 'src/models/entities/events/tours/Event'
import Fee from 'src/models/entities/events/tours/events/Fee'
import Time from 'src/models/entities/events/tours/events/Time'
import Track from 'src/models/entities/events/tours/events/Track'

export default class EventBuilder extends TourBuilder<Event> {
    private entity = new Event()

    build = () => Object.assign(this.entity, super.build())

    setFees = (...value: Fee[]): this => {
        this.entity.fees = value

        return this
    }

    setTimes = (...value: Time[]): this => {
        this.entity.times = value

        return this
    }

    setTracks = (...value: Track[]): this => {
        this.entity.tracks = value

        return this
    }
}
