export default function useDateTime() {
    const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const dateTimeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: '2-digit' })
    const timeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { hour: 'numeric', minute: '2-digit' })

    return {
        format: (start: Date, end: Date | null = null, allDay = false) => {
            const formatter = allDay ? dateFormatter : dateTimeFormatter

            return end ? formatter.formatRange(start, end) : formatter.format(start)
        },
        formatTime: (start: Date, end: Date | null = null) => (end ? timeFormatter.formatRange(start, end) : timeFormatter.format(start)),
        getDaysInMonth: (month: number, year: number) => new Date(year, month, 0).getDate(),
        getTomorrowMidnight: () => {
            const date = new Date(Date.now())

            date.setDate(date.getDate() + 1)
            date.setHours(0, 0, 0, 0)

            return date
        },
        isBetween: (date: Date, start: Date, end: Date) => {
            let tempStart = start
            let tempEnd = end

            if (tempStart.getTime() > tempEnd.getTime()) [tempStart, tempEnd] = [tempEnd, tempStart]

            return date.getTime() >= tempStart.getTime() && date.getTime() <= tempEnd.getTime()
        },
        isSameDay: (start: Date, end: Date) => end.getFullYear() === start.getFullYear() && end.getMonth() === start.getMonth() && end.getDate() === start.getDate(),
        sort: (a: Date, b: Date) => a.getTime() - b.getTime(),
    }
}
