import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/calendar/Event'

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

    endDate(value: Date): EventBuilder {
        this.value.end = value

        return this
    }

    // If some dates are not saved with hh:mm they'll trigger a NaN-error.
    // noinspection FunctionNamingConventionJS
    end(year: number, month: number, date: number, hours = 0, minutes = 0): EventBuilder {
        // The month value is 0-11. We need an offset.
        this.value.end = new Date(year, month - 1, date, hours, minutes)

        return this
    }

    url(value: string): EventBuilder {
        this.value.url = new URL(`https://${value}`)

        return this
    }

    name(value: string): EventBuilder {
        this.value.name = value

        return this
    }

    startDate(value: Date): EventBuilder {
        this.value.start = value

        return this
    }

    // If some dates are not saved with hh:mm they'll trigger a NaN-error.
    start(year: number, month: number, date: number, hours = 0, minutes = 0): EventBuilder {
        // The month value is 0-11. We need an offset.
        this.value.start = new Date(year, month - 1, date, hours, minutes)

        return this
    }

    build(): Event {
        this.value.color = getColor(this.value.category)

        return this.value
    }
}
