import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Fee from '~/models/entities/events/tours/events/Fee'
import EEvent from '~/models/enums/EEvent'

export default class FeeBuilder extends ABuilder<Fee> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private category = EEvent.RTF
    private name!: string
    private price!: number

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                category: this.category,
                name: this.name,
                price: this.price,
            },
            new AEntity(this.id)
        ) as Fee
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
