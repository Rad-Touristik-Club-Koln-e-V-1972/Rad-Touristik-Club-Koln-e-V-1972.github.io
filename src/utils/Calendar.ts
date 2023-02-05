import Holidays, * as DateHolidays from 'date-holidays'
import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default function useCalendar() {
    const holidays = new Holidays('DE', { languages: ['de'] })

    return {
        getHolidays: (year: number) =>
            holidays
                .getHolidays(year)
                .map((it: DateHolidays.HolidaysTypes.Holiday) =>
                    new EventBuilder().setAllDay(true).setCategory(EEvent.Feiertag).setDate(it.date).setId(`${it.date}${it.name}`).setName(it.name).build()
                ),
    }
}
