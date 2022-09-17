import BlogEntry from '~/models/entities/index/BlogEntry'

export default class BlogEntryBuilder {
    protected readonly value = new BlogEntry()

    date(value: string): BlogEntryBuilder {
        this.value.date = new Date(value)

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

    build(): BlogEntry {
        return this.value
    }
}
