import ABuilder from 'src/models/builder/ABuilder'
import Control from 'src/models/entities/events/tours/Control'

export default class ControlBuilder extends ABuilder {
    private entity = new Control()

    build = () => Object.assign(this.entity, super.build())

    setCity = (value: string): this => {
        this.entity.city = value

        return this
    }

    setStreet = (value: string): this => {
        this.entity.street = value

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }

    setUrl = (value: string): this => {
        this.entity.url = new URL(`https://${value}`)

        return this
    }

    setZipCode = (value: string): this => {
        this.entity.zipCode = value

        return this
    }
}
