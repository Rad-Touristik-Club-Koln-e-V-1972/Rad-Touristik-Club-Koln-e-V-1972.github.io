import { marked } from 'marked'

export default function useDateTime() {
    // For a better performance and to remove the seconds.
    const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

    return {
        format: (start: Date, end?: Date, allDay = false) => {
            let ret: string
            const startPair = dateFormatter.format(start).split(',')

            if (end) {
                const endPair = dateFormatter.format(end).split(',')

                ret = `${startPair[0]} - ${endPair[0]}${
                    allDay
                        ? ''
                        : `\\
            ${startPair[1]} - ${endPair[1]}`
                }`
            } else ret = startPair[0]

            return marked.parseInline(ret)
        },
        getDaysInMonth: (month: number, year: number) => {
            return new Date(year, month, 0).getDate()
        },
        isBetween: (date: Date, start: Date, end: Date) => {
            let tempStart = start
            let tempEnd = end

            if (tempStart.getTime() > tempEnd.getTime()) [tempStart, tempEnd] = [tempEnd, tempStart]

            return date.getTime() >= tempStart.getTime() && date.getTime() <= tempEnd.getTime()
        },
        isSameDay: (date: Date, start: Date) => date.getFullYear() === start.getFullYear() && date.getMonth() === start.getMonth() && date.getDate() === start.getDate(),
    }
}
