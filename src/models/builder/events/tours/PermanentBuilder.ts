import TourBuilder from '~/models/builder/events/TourBuilder'
import Permanent from '~/models/entities/events/tours/Permanent'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class PermanentBuilder extends TourBuilder<Permanent> {
    private entity = new Permanent()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setHeight(value: number): PermanentBuilder {
        this.entity.height = value

        return this
    }

    setLength(value: number): PermanentBuilder {
        this.entity.length = value

        return this
    }

    setProfile(value: EProfile): PermanentBuilder {
        this.entity.profile = value

        return this
    }
}
