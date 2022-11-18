import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Control from '~/models/entities/events/tours/Control'

export default class ControlBuilder extends ABuilder<Control> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private city!: string
    private street!: string
    private url?: string
    private title!: string
    private zipCode!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                city: this.city,
                street: this.street,
                url: new URL(`https://${this.url}`),
                title: this.title,
                zipCode: this.zipCode,
            },
            new AEntity(this.id)
        ) as Control
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
