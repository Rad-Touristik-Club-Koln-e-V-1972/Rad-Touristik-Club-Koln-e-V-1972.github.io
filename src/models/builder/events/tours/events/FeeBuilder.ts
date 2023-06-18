import ABuilder from 'src/models/builder/ABuilder'
import Fee from 'src/models/entities/events/tours/events/Fee'
import EEvent from 'src/models/enums/EEvent'

export default class FeeBuilder extends ABuilder {
    private entity = new Fee()

    build = () => Object.assign(this.entity, super.build())

    setCategory = (value: EEvent): this => {
        this.entity.category = value

        return this
    }

    setName = (value: string): this => {
        this.entity.name = value

        return this
    }

    setPrice = (value: number): this => {
        this.entity.price = value

        return this
    }
}
