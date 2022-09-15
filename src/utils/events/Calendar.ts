import Holidays from 'date-holidays'
import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default function useCalendar() {
    const holidays = new Holidays('DE', { languages: ['de'] })

    return {
        getHolidays: (
            year: number // TODO "any" IS A WORKAROUND FOR https://github.com/commenthol/date-holidays/issues/354
        ) => holidays.getHolidays(year).map((it: any) => new EventBuilder().allDay(true).category(EEvent.Feiertag).date(it.start, it.end).name(it.name).build()),
    }
}
