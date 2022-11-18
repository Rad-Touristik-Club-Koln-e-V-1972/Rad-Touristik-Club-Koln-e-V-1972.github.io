import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Time from '~/models/entities/events/tours/events/Time'

export default class TimeBuilder extends ABuilder<Time> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private end?: string
    private name!: string
    private start!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                end: this.end ? new Date(`1970-01-01 ${this.end}`) : undefined,
                name: this.name,
                start: new Date(`1970-01-01 ${this.start}`),
            },
            new AEntity(this.id)
        ) as Time
    }

    setName(value: string): TimeBuilder {
        this.name = value

        return this
    }

    setTime(start: string, end?: string): TimeBuilder {
        this.start = start
        this.end = end

        return this
    }
}
