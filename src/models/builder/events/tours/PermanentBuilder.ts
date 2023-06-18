import TourBuilder from 'src/models/builder/events/TourBuilder'
import Permanent from 'src/models/entities/events/tours/Permanent'
import EProfile from 'src/models/enums/events/tours/EProfile'

export default class PermanentBuilder extends TourBuilder<Permanent> {
    private entity = new Permanent()

    build = () => Object.assign(this.entity, super.build())

    setHeight = (value: number): this => {
        this.entity.height = value

        return this
    }

    setLength = (value: number): this => {
        this.entity.length = value

        return this
    }

    setProfile = (value: EProfile): this => {
        this.entity.profile = value

        return this
    }
}
