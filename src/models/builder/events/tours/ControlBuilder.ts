import ABuilder from '~/models/builder/ABuilder'
import Control from '~/models/entities/events/tours/Control'

export default class ControlBuilder extends ABuilder {
    private entity = new Control()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setCity(value: string): ControlBuilder {
        this.entity.city = value

        return this
    }

    setStreet(value: string): ControlBuilder {
        this.entity.street = value

        return this
    }

    setTitle(value: string): ControlBuilder {
        this.entity.title = value

        return this
    }

    setUrl(value: string): ControlBuilder {
        this.entity.url = new URL(`https://${value}`)

        return this
    }

    setZipCode(value: string): ControlBuilder {
        this.entity.zipCode = value

        return this
    }
}
