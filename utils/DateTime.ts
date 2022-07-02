import { marked } from 'marked'

export default class DateTime {
    // For a better performance and to remove the seconds.
    static dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

    static format(start: Date, end?: Date, allDay: boolean = false): string {
        let ret: string
        const startPair: string[] = DateTime.dateFormatter.format(start).split(',')

        if (end) {
            const endPair: string[] = DateTime.dateFormatter.format(end).split(',')

            ret = `${startPair[0]} - ${endPair[0]}${
                allDay
                    ? ''
                    : `\\
            ${startPair[1]} - ${endPair[1]}`
            }`
        } else ret = startPair[0]

        return marked.parseInline(ret)
    }

    static isBetween: (date: Date, start: Date, end: Date) => boolean = (date: Date, start: Date, end: Date) => {
        let tempStart = start
        let tempEnd = end

        if (tempStart.getTime() > tempEnd.getTime()) [tempStart, tempEnd] = [tempEnd, tempStart]

        return date.getTime() >= tempStart.getTime() && date.getTime() <= tempEnd.getTime()
    }

    static isSameDay: (date: Date, start: Date) => boolean = (date: Date, start: Date) =>
        date.getFullYear() === start.getFullYear() && date.getMonth() === start.getMonth() && date.getDate() === start.getDate()
}
