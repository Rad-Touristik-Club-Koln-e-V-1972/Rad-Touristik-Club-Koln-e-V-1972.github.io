import TourBuilder from '~/models/builder/events/TourBuilder'
import Permanent from '~/models/entities/events/tours/Permanent'
import EProfile from '~/models/enums/events/tours/EProfile'
import EEvent from '~/models/enums/EEvent'

export default class PermanentBuilder extends TourBuilder<Permanent> {
    private height!: number
    private length!: number
    private profile = EProfile.wellig

    build() {
        return Object.assign(super.build(), {
            category: EEvent.Permanente,
            height: this.height,
            length: this.length,
            profile: this.profile,
        }) satisfies Permanent
    }

    setHeight(value: number): PermanentBuilder {
        this.height = value

        return this
    }

    setLength(value: number): PermanentBuilder {
        this.length = value

        return this
    }

    setProfile(value: EProfile): PermanentBuilder {
        this.profile = value

        return this
    }
}
