import ABuilder from '~/models/builder/ABuilder'
import Fee from '~/models/entities/events/tours/events/Fee'
import EEvent from '~/models/enums/EEvent'

export default class FeeBuilder extends ABuilder<Fee> {
    private entity = new Fee()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setCategory(value: EEvent): FeeBuilder {
        this.entity.category = value

        return this
    }

    setName(value: string): FeeBuilder {
        this.entity.name = value

        return this
    }

    setPrice(value: number): FeeBuilder {
        this.entity.price = value

        return this
    }
}
