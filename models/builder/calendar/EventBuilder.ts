import EEvent from '@/models/enums/EEvent'
import Event from '@/models/entities/calendar/Event'

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

    // If some dates are not saved with hh:mm they'll trigger a NaN-error.
    // noinspection FunctionNamingConventionJS
    end(year: number, month: number, date: number, hours: number = 0, minutes: number = 0): EventBuilder {
        // The month value is 0-11. We need an offset.
        this.value.end = new Date(year, month - 1, date, hours, minutes)
        return this
    }

    name(value: string): EventBuilder {
        this.value.name = value
        return this
    }

    // If some dates are not saved with hh:mm they'll trigger a NaN-error.
    start(year: number, month: number, date: number, hours: number = 0, minutes: number = 0): EventBuilder {
        // The month value is 0-11. We need an offset.
        this.value.start = new Date(year, month - 1, date, hours, minutes)
        return this
    }

    build(): Event {
        this.value.color = EventBuilder.getColor(this.value.category)

        return this.value
    }

    private static getColor(value: EEvent) {
        let color: string = 'primary'

        if (value === EEvent.CTF) color = 'blue'
        else if (value === EEvent.RTF) color = 'deep-purple'

        return color
    }
}
