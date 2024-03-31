import ABuilder from 'src/models/builder/ABuilder'
import Control from 'src/models/entities/events/tours/Control'

export default class ControlBuilder extends ABuilder {
  private control = new Control()

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
