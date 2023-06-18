import Holidays, * as DateHolidays from 'date-holidays'
import EventBuilder from 'src/models/builder/events/calendar/EventBuilder'
import Event from 'src/models/entities/events/calendar/Event'
import EEvent from 'src/models/enums/EEvent'

export default function useCalendar() {
    const holidays = new Holidays('DE', { languages: ['de'] })

    return {
        getHolidays(year: number): Event[] {
            return holidays
                .getHolidays(year)
                .map((it: DateHolidays.HolidaysTypes.Holiday) =>
                    new EventBuilder().setCategory(EEvent.Feiertag).setDate(it.date).setId(`${it.date}${it.name}`).setName(it.name).build(),
                )
        },
    }
}
