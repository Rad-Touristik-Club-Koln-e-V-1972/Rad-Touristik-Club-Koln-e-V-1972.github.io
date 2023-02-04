import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Track from '~/models/entities/events/tours/events/Track'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class TrackBuilder extends ABuilder<Track> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private controls!: number
    private end!: Date
    private height!: number
    private important = false
    private length!: number
    private name!: string
    private profile = EProfile.normal
    private start!: Date
    private text!: string
    private urls!: Record<string, URL>

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                controls: this.controls,
                end: this.end,
                height: this.height,
                important: this.important,
                length: this.length,
                name: this.name,
                profile: this.profile,
                start: this.start,
                text: this.text,
                urls: this.urls ?? {},
            },
            new AEntity(this.id)
        ) as Track
    }

    setControls(value: number): TrackBuilder {
        this.controls = value

        return this
    }

    setHeight(value: number): TrackBuilder {
        this.height = value

        return this
    }

    setImportant(value: boolean): TrackBuilder {
        this.important = value

        return this
    }

    setLength(value: number): TrackBuilder {
        this.length = value

        return this
    }

    setName(value: string): TrackBuilder {
        this.name = value

        return this
    }

    setProfile(value: EProfile): TrackBuilder {
        this.profile = value

        return this
    }

    setText(value: string): TrackBuilder {
        this.text = value

        return this
    }

    setTime(start: string, end: string): TrackBuilder {
        this.start = new Date(`1970-01-01 ${start}`)
        this.end = new Date(`1970-01-01 ${end}`)

        return this
    }

    setUrls(value: Record<string, URL>): TrackBuilder {
        this.urls = value

        return this
    }
}
