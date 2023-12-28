import ABuilder from 'src/models/builder/ABuilder'
import EEvent from 'src/models/enums/EEvent'
import Event from 'src/models/entities/events/calendar/Event'

export default class EventBuilder extends ABuilder {
    private event = new Event()

    buildEvent = () => Object.assign(this.event, this.buildAEntity())

    setAllDay = (value: boolean): this => {
        this.event.allDay = value

        return this
    }

    setCategory = (value: EEvent): this => {
        this.event.category = value
        this.event.color = this.getColor(value)

        return this
    }

    setContact = (value: string): this => {
        this.event.contact = value

        return this
    }

    setDate = (start: Date | string, end: Date | string | null = null): this => {
        if (end) this.event.end = new Date(end)
        this.event.start = new Date(start)

        return this
    }

    setKilometer = (value: number): this => {
        this.event.kilometer = value

        return this
    }

    setName = (value: string): this => {
        this.event.name = value

        return this
    }

    setProvisionalReason = (value: string): this => {
        this.event.provisionalReason = value

        return this
    }

    setUrl = (value: string): this => {
        this.event.url = new URL(`https://${value}`)

        return this
    }

    private getColor = (value: EEvent) => {
        let color

        switch (value) {
            case EEvent.Abgesagt:
                color = 'grey'
                break
            case EEvent.CTF:
            case EEvent.Marathon:
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
