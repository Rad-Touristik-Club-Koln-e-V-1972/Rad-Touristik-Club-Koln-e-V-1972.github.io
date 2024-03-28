import ABuilder from 'src/models/builder/ABuilder'
import Fee from 'src/models/entities/events/tours/events/Fee'
import EEvent from 'src/models/enums/EEvent'

export default class FeeBuilder extends ABuilder {
    private fee = new Fee()

    buildFee = () => Object.assign(this.fee, this.buildAEntity())

    setCategory = (value: EEvent): this => {
        this.fee.category = value

        return this
    }

    setGroup = (value: number): this => {
        this.fee.group = value

        return this
    }

    setName = (value: string): this => {
        this.fee.name = value

        return this
    }

    setPrice = (value: number): this => {
        this.fee.price = value

        return this
    }
}
