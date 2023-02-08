import ABuilder from '~/models/builder/ABuilder'
import Time from '~/models/entities/events/tours/events/Time'

export default class TimeBuilder extends ABuilder<Time> {
    private entity = new Time()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setName(value: string): TimeBuilder {
        this.entity.name = value

        return this
    }

    setTime(start: string, end?: string): TimeBuilder {
        if (end) this.entity.end = new Date(`1970-01-01 ${end}`)
        this.entity.start = new Date(`1970-01-01 ${start}`)

        return this
    }
}
