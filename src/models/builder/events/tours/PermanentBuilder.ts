import TourBuilder from '~/models/builder/events/TourBuilder'
import Permanent from '~/models/entities/events/tours/Permanent'
import EProfile from '~/models/enums/events/tours/EProfile'
import EEvent from '~/models/enums/EEvent'

export default class PermanentBuilder extends TourBuilder<Permanent> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private height!: number
    private length!: number
    private profile = EProfile.wellig

    build() {
        const value = super.build()

        value.category = EEvent.Permanente
        value.height = this.height
        value.length = this.length
        value.profile = this.profile

        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return value as Permanent
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
