import ABuilder from '~/models/builder/ABuilder'
import Time from '~/models/entities/events/tours/events/Time'

export default class TimeBuilder extends ABuilder<Time> {
    constructor() {
        super(new Time())
    }

    name(value: string): TimeBuilder {
        this.value.name = value

        return this
    }

    time(start: string, end?: string): TimeBuilder {
        this.value.start = new Date(`1970-01-01 ${start}`)
        if (end) this.value.end = new Date(`1970-01-01 ${end}`)

        return this
    }
}
