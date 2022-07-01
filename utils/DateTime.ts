import { marked } from 'marked'

export default class DateTime {
    // For a better performance and to remove the seconds.
    static dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

    static format(start: Date, end?: Date): string {
        let dateTime = DateTime.dateFormatter.format(start)

        if (end) {
            const startPair: string[] = dateTime.split(',')
            const endPair: string[] = DateTime.dateFormatter.format(end).split(',')

            dateTime = `${startPair[0]} - ${endPair[0]}
            \\
            ${startPair[1]} - ${endPair[1]}`
        }
        return marked.parseInline(dateTime)
    }

    static isBetween: (date: Date, start: Date, end: Date) => boolean = (date: Date, start: Date, end: Date) => {
        let tempStart = start
        let tempEnd = end

        if (tempStart.getTime() > tempEnd.getTime()) [tempStart, tempEnd] = [tempEnd, tempStart]

        return date.getTime() >= tempStart.getTime() && date.getTime() <= tempEnd.getTime()
    }

    static isFuture: (it: Date) => boolean = (it: Date) => it.getTime() > Date.now()

    static isSameDay: (date: Date, start: Date) => boolean = (date: Date, start: Date) =>
        date.getFullYear() === start.getFullYear() && date.getMonth() === start.getMonth() && date.getDate() === start.getDate()
}
