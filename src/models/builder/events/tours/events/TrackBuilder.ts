import ABuilder from '~/models/builder/ABuilder'
import Track from '~/models/entities/events/tours/events/Track'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class TrackBuilder extends ABuilder<Track> {
    private entity = new Track()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setControls(value: number): TrackBuilder {
        this.entity.controls = value

        return this
    }

    setHeight(value: number): TrackBuilder {
        this.entity.height = value

        return this
    }

    setImportant(value: boolean): TrackBuilder {
        this.entity.important = value

        return this
    }

    setLength(value: number): TrackBuilder {
        this.entity.length = value

        return this
    }

    setName(value: string): TrackBuilder {
        this.entity.name = value

        return this
    }

    setProfile(value: EProfile): TrackBuilder {
        this.entity.profile = value

        return this
    }

    setText(value: string): TrackBuilder {
        this.entity.text = value

        return this
    }

    setTime(start: string, end: string): TrackBuilder {
        this.entity.end = new Date(`1970-01-01 ${end}`)
        this.entity.start = new Date(`1970-01-01 ${start}`)

        return this
    }

    setUrls(value: Record<string, URL>): TrackBuilder {
        this.entity.urls = value

        return this
    }
}
