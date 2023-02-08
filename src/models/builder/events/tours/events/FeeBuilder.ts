import ABuilder from '~/models/builder/ABuilder'
import Fee from '~/models/entities/events/tours/events/Fee'
import EEvent from '~/models/enums/EEvent'

export default class FeeBuilder extends ABuilder<Fee> {
    private category = EEvent.RTF
    private name!: string
    private price: number | null = null

    build() {
        return {
            category: this.category,
            id: this.id,
            name: this.name,
            price: this.price,
        } satisfies Fee
    }

    setCategory(value: EEvent): FeeBuilder {
        this.category = value

        return this
    }

    setName(value: string): FeeBuilder {
        this.name = value

        return this
    }

    setPrice(value: number): FeeBuilder {
        this.price = value

        return this
    }
}
