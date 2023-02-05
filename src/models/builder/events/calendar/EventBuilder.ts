import ABuilder from '~/models/builder/ABuilder'
import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/calendar/Event'

export default class EventBuilder extends ABuilder<Event> {
    private category = EEvent.RTC
    private clubPoints?: number
    private contact!: string
    private end?: Date
    private name!: string
    private start!: Date
    private timed = false
    private url?: URL

    build() {
        return {
            category: this.category,
            clubPoints: this.clubPoints,
            color: this.getColor(this.category),
            contact: this.contact,
            id: this.id,
            end: this.end,
            name: this.name,
            start: this.start,
            timed: this.timed,
            url: this.url,
        } satisfies Event
    }

    setAllDay(value: boolean): EventBuilder {
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
        this.start = new Date(start)
        this.end = end ? new Date(end) : undefined

        return this
    }

    setName(value: string): EventBuilder {
        this.name = value

        return this
    }

    setUrl(value: string): EventBuilder {
        this.url = new URL(`https://${value}`)

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
