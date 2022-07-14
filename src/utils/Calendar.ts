import Holidays, { HolidaysTypes } from 'date-holidays'
import EventBuilder from '~/models/builder/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default function useCalendar() {
    const holidays = new Holidays('DE', { languages: ['de'] })

    return {
        getHolidays: (year: number) =>
            holidays
                .getHolidays(year)
                .map((it: HolidaysTypes.Holiday) => new EventBuilder().allDay(true).category(EEvent.Feiertag).endDate(it.end).name(it.name).startDate(it.start).build()),
    }
}
