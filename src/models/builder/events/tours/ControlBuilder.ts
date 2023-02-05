import ABuilder from '~/models/builder/ABuilder'
import Control from '~/models/entities/events/tours/Control'

export default class ControlBuilder extends ABuilder<Control> {
    private city!: string
    private street!: string
    private url?: string
    private title!: string
    private zipCode!: string

    build() {
        return {
            city: this.city,
            id: this.id,
            street: this.street,
            url: new URL(`https://${this.url}`),
            title: this.title,
            zipCode: this.zipCode,
        } satisfies Control
    }

    setCity(value: string): ControlBuilder {
        this.city = value

        return this
    }

    setStreet(value: string): ControlBuilder {
        this.street = value

        return this
    }

    setTitle(value: string): ControlBuilder {
        this.title = value

        return this
    }

    setUrl(value: string): ControlBuilder {
        this.url = value

        return this
    }

    setZipCode(value: string): ControlBuilder {
        this.zipCode = value

        return this
    }
}
