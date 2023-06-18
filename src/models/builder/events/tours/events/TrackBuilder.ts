import ABuilder from 'src/models/builder/ABuilder'
import Track from 'src/models/entities/events/tours/events/Track'
import EProfile from 'src/models/enums/events/tours/EProfile'

export default class TrackBuilder extends ABuilder {
    private entity = new Track()

    build = () => Object.assign(this.entity, super.build())

    setControls = (value: number): this => {
        this.entity.controls = value

        return this
    }

    setHeight = (value: number): this => {
        this.entity.height = value

        return this
    }

    setImportant = (value: boolean): this => {
        this.entity.important = value

        return this
    }

    setLength = (value: number): this => {
        this.entity.length = value

        return this
    }

    setName = (value: string): this => {
        this.entity.name = value

        return this
    }

    setProfile = (value: EProfile): this => {
        this.entity.profile = value

        return this
    }

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTime = (start: string, end: string): this => {
        this.entity.end = new Date(`1970-01-01 ${end}`)
        this.entity.start = new Date(`1970-01-01 ${start}`)

        return this
    }

    setUrls = (value: Record<string, URL>): this => {
        this.entity.urls = value

        return this
    }
}
