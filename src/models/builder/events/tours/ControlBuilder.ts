import Control from '~/models/entities/events/tours/Control'

export default class ControlBuilder {
    protected readonly value = new Control()

    city(value: string): ControlBuilder {
        this.value.city = value

        return this
    }

    street(value: string): ControlBuilder {
        this.value.street = value

        return this
    }

    title(value: string): ControlBuilder {
        this.value.title = value

        return this
    }

    url(value: string): ControlBuilder {
        this.value.url = new URL(`https://${value}`)

        return this
    }

    zipCode(value: string): ControlBuilder {
        this.value.zipCode = value

        return this
    }

    build(): Control {
        return this.value
    }
}
