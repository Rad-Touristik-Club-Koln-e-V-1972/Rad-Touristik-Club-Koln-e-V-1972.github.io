import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/calendar/Event'

const getColor = (value: EEvent) => {
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

export default class EventBuilder {
    private readonly value: Event

    constructor() {
        this.value = new Event()
    }

    allDay(value: boolean): EventBuilder {
        this.value.timed = !value

        return this
    }

    category(value: EEvent): EventBuilder {
        this.value.category = value

        return this
    }

    clubPoints(value: number): EventBuilder {
        this.value.clubPoints = value

        return this
    }

    contact(value: string): EventBuilder {
        this.value.contact = value

        return this
    }

    date(start: Date | string, end?: Date | string): EventBuilder {
        this.value.start = new Date(start)
        if (end) this.value.end = new Date(end)

        return this
    }

    name(value: string): EventBuilder {
        this.value.name = value

        return this
    }

    url(value: string): EventBuilder {
        this.value.url = new URL(`https://${value}`)

        return this
    }

    build(): Event {
        this.value.color = getColor(this.value.category)

        return this.value
    }
}
