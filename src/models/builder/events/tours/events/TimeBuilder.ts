import ABuilder from '~/models/builder/ABuilder'
import Time from '~/models/entities/events/tours/events/Time'

export default class TimeBuilder extends ABuilder<Time> {
    private end?: Date
    private name!: string
    private start!: Date

    build() {
        return {
            end: this.end,
            id: this.id,
            name: this.name,
            start: this.start,
        } satisfies Time
    }

    setName(value: string): TimeBuilder {
        this.name = value

        return this
    }

    setTime(start: string, end?: string): TimeBuilder {
        this.start = new Date(`1970-01-01 ${start}`)
        this.end = end ? new Date(`1970-01-01 ${end}`) : undefined

        return this
    }
}
