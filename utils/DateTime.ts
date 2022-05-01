import { marked } from 'marked'

export default class DateTime {
    // For a better performance and to remove the seconds.
    static dateFormatter = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

    static format(start: Date, end?: Date) {
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

    static isFuture = (it: Date) => it.getTime() > Date.now()
}
