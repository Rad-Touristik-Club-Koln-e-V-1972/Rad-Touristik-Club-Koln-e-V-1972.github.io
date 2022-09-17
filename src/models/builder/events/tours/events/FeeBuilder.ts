import ABuilder from '~/models/builder/ABuilder'
import Fee from '~/models/entities/events/tours/events/Fee'
import EEvent from '~/models/enums/EEvent'

export default class FeeBuilder extends ABuilder<Fee> {
    constructor() {
        super(new Fee())
    }

    protected readonly value = new Fee()

    category(value: EEvent): FeeBuilder {
        this.value.category = value

        return this
    }

    name(value: string): FeeBuilder {
        this.value.name = value

        return this
    }

    price(value: number): FeeBuilder {
        this.value.price = value

        return this
    }
}
