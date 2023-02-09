import ABuilder from '~/models/builder/ABuilder'
import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/calendar/Event'

export default class EventBuilder extends ABuilder {
    private entity = new Event()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setAllDay(value: boolean): EventBuilder {
        this.entity.timed = !value

        return this
    }

    setCategory(value: EEvent): EventBuilder {
        this.entity.category = value
        this.entity.color = this.getColor(value)

        return this
    }

    setClubPoints(value: number): EventBuilder {
        this.entity.clubPoints = value

        return this
    }

    setContact(value: string): EventBuilder {
        this.entity.contact = value

        return this
    }

    setDate(start: Date | string, end: Date | string | null = null): EventBuilder {
        if (end) this.entity.end = new Date(end)
        this.entity.start = new Date(start)

        return this
    }

    setName(value: string): EventBuilder {
        this.entity.name = value

        return this
    }

    setUrl(value: string): EventBuilder {
        this.entity.url = new URL(`https://${value}`)

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
