import TourBuilder from 'src/models/builder/events/tours/TourBuilder'
import Event from 'src/models/entities/events/tours/Event'
import Fee from 'src/models/entities/events/tours/Fee'
import Time from 'src/models/entities/events/tours/Time'
import Track from 'src/models/entities/events/tours/Track'

export default class EventBuilder extends TourBuilder {
  private event = new Event()

  buildEvent = () => Object.assign(this.event, this.buildTour())

  setFees = (...value: Fee[]): this => {
    this.event.fees = value

    return this
  }

  setTimes = (...value: Time[]): this => {
    this.event.times = value

    return this
  }

  setTracks = (...value: Track[]): this => {
    this.event.tracks = value

    return this
  }
}
