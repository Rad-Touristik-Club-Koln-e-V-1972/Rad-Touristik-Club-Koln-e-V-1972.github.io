import ABuilder from 'src/models/builder/ABuilder'
import Location from 'src/models/entities/events/tours/Location'

export default class ControlBuilder extends ABuilder {
  private control = new Location()

  buildControl = () => Object.assign(this.control, this.buildAEntity())

  setCity = (value: string): this => {
    this.control.city = value

    return this
  }

  setStreet = (value: string): this => {
    this.control.street = value

    return this
  }

  setTitle = (value: string): this => {
    this.control.title = value

    return this
  }

  setUrl = (value: string): this => {
    this.control.url = new URL(`https://${value}`)

    return this
  }

  setZipCode = (value: string): this => {
    this.control.zipCode = value

    return this
  }
}
