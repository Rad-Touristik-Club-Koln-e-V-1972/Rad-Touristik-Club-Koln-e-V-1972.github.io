import Track from '~/models/entities/events/tours/events/Track'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class TrackBuilder {
    protected readonly value = new Track()

    controls(value: number): TrackBuilder {
        this.value.controls = value

        return this
    }

    height(value: number): TrackBuilder {
        this.value.height = value

        return this
    }

    important(value: boolean): TrackBuilder {
        this.value.important = value

        return this
    }

    length(value: number): TrackBuilder {
        this.value.length = value

        return this
    }

    name(value: string): TrackBuilder {
        this.value.name = value

        return this
    }

    profile(value: EProfile): TrackBuilder {
        this.value.profile = value

        return this
    }

    text(value: string): TrackBuilder {
        this.value.text = value

        return this
    }

    time(start: string, end: string): TrackBuilder {
        this.value.start = new Date(`1970-01-01 ${start}`)
        this.value.end = new Date(`1970-01-01 ${end}`)

        return this
    }

    urls(value: Record<string, URL>): TrackBuilder {
        this.value.urls = value

        return this
    }

    build(): Track {
        return this.value
    }
}
