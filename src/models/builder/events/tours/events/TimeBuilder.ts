import ABuilder from 'src/models/builder/ABuilder'
import Time from 'src/models/entities/events/tours/events/Time'

export default class TimeBuilder extends ABuilder {
  private time = new Time()

  buildTime = () => Object.assign(this.time, this.buildAEntity())

  setName = (value: string): this => {
    this.time.name = value

    return this
  }

  setTime = (start: string, end?: string): this => {
    this.time.end = end
    this.time.start = start

    return this
  }
}
