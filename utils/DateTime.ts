import { marked } from 'marked'

export default class DateTime {
    // For a better performance and to remove the seconds.
    static dateFormatter = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

    static format(start: Date) {
        return marked.parseInline(DateTime.dateFormatter.format(start))
    }
}
