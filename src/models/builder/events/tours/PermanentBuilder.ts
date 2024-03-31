import TourBuilder from 'src/models/builder/events/TourBuilder'
import Permanent from 'src/models/entities/events/tours/Permanent'
import EProfile from 'src/models/enums/events/tours/EProfile'

export default class PermanentBuilder extends TourBuilder {
  private permanent = new Permanent()

  buildPermanent = () => Object.assign(this.permanent, this.buildTour())

  setHeight = (value: number): this => {
    this.permanent.height = value

    return this
  }

  setLength = (value: number): this => {
    this.permanent.length = value

    return this
  }

  setProfile = (value: EProfile): this => {
    this.permanent.profile = value

    return this
  }
}
