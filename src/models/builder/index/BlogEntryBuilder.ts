import ABuilder from '~/models/builder/ABuilder'
import BlogEntry from '~/models/entities/index/BlogEntry'

export default class BlogEntryBuilder extends ABuilder<BlogEntry> {
    constructor() {
        super(new BlogEntry())
    }

    albumIDs(...value: string[]): BlogEntryBuilder {
        this.value.albumIDs = value

        return this
    }

    date(start: string, end?: string): BlogEntryBuilder {
        this.value.start = new Date(start)
        if (end) this.value.end = new Date(end)

        return this
    }

    text(value: string): BlogEntryBuilder {
        this.value.text = value

        return this
    }

    title(value: string): BlogEntryBuilder {
        this.value.title = value

        return this
    }
}
