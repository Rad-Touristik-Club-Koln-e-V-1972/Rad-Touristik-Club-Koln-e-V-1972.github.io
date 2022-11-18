import TourBuilder from '~/models/builder/events/TourBuilder'
import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/tours/Event'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'

export default class EventBuilder extends TourBuilder<Event> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private fees!: Fee[]
    private subtitle!: string
    private times!: Time[]
    private tracks!: Track[]

    build() {
        const value = super.build()

        value.category = EEvent.RTF
        value.fees = this.fees ?? []
        value.subtitle = this.subtitle
        value.times = this.times ?? []
        value.tracks = this.tracks ?? []

        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return value as Event
    }

    setFees(...value: Fee[]): EventBuilder {
        this.fees = value

        return this
    }

    setSubtitle(value: string): EventBuilder {
        this.subtitle = value

        return this
    }

    setTimes(...value: Time[]): EventBuilder {
        this.times = value

        return this
    }

    setTracks(...value: Track[]): EventBuilder {
        this.tracks = value

        return this
    }
}
