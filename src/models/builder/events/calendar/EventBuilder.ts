import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/calendar/Event'

export default class EventBuilder extends ABuilder<Event> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private category = EEvent.RTC
    private clubPoints?: number
    private contact!: string
    private end?: string | Date
    private name!: string
    private start!: string | Date
    private timed = false
    private url?: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                category: this.category,
                clubPoints: this.clubPoints,
                color: this.getColor(this.category),
                contact: this.contact,
                end: this.end ? new Date(this.end) : undefined,
                name: this.name,
                start: new Date(this.start),
                timed: this.timed,
                url: this.url ? new URL(`https://${this.url}`) : undefined,
            },
            new AEntity(this.id)
        ) as Event
    }

    setallDay(value: boolean): EventBuilder {
        this.timed = !value

        return this
    }

    setCategory(value: EEvent): EventBuilder {
        this.category = value

        return this
    }

    setClubPoints(value: number): EventBuilder {
        this.clubPoints = value

        return this
    }

    setContact(value: string): EventBuilder {
        this.contact = value

        return this
    }

    setDate(start: Date | string, end?: Date | string): EventBuilder {
        this.start = start
        this.end = end

        return this
    }

    setName(value: string): EventBuilder {
        this.name = value

        return this
    }

    setUrl(value: string): EventBuilder {
        this.url = value

        return this
    }

    private getColor = (value: EEvent) => {
        let color

        switch (value) {
            case EEvent.Abgesagt:
                color = 'grey'
                break
            case EEvent.CTF:
                color = 'blue'
                break
            case EEvent.Feiertag:
                color = 'secondary'
                break
            case EEvent.Mitgliederversammlung:
                color = 'green'
                break
            case EEvent.Permanente:
                color = 'red'
                break
            case EEvent.RTF:
                color = 'deep-purple'
                break
            case EEvent.Veranstaltung:
                color = 'pink darken-3'
                break
            case EEvent.RTC:
            case EEvent.Vereinsfahrt:
            default:
                color = 'primary'
        }

        return color
    }
}
