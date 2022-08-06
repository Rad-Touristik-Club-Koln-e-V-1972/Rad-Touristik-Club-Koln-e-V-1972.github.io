import TourBuilder from '~/models/builder/events/TourBuilder'
import Event from '~/models/entities/events/tours/Event'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

export default class EventBuilder extends TourBuilder {
    protected readonly value = new Event()

    category(value: EEvent): EventBuilder {
        super.category(value)

        return this
    }

    fees(...value: Fee[]): EventBuilder {
        this.value.fees = value

        return this
    }

    images(...value: GalleryEntry[]): EventBuilder {
        super.images(...value)

        return this
    }

    lastChange(value: string): EventBuilder {
        super.lastChange(value)

        return this
    }

    subtitle(value: string): EventBuilder {
        this.value.subtitle = value

        return this
    }

    text(value: string): EventBuilder {
        super.text(value)

        return this
    }

    times(...value: Time[]): EventBuilder {
        this.value.times = value

        return this
    }

    title(value: string): EventBuilder {
        super.title(value)

        return this
    }

    tracks(...value: Track[]): EventBuilder {
        this.value.tracks = value

        return this
    }

    urls(value: Record<string, URL>): EventBuilder {
        super.urls(value)

        return this
    }

    build(): Event {
        return this.value
    }
}
