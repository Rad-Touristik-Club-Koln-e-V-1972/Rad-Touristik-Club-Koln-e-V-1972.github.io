import Holidays, { HolidaysTypes } from 'date-holidays'
import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default function useCalendar() {
    const holidays = new Holidays('DE', { languages: ['de'] })

    return {
        getHolidays: (year: number) =>
            holidays
                .getHolidays(year)
                .map((it: HolidaysTypes.Holiday) => new EventBuilder().allDay(true).category(EEvent.Feiertag).end(it.end).name(it.name).start(it.start).build()),
    }
}
