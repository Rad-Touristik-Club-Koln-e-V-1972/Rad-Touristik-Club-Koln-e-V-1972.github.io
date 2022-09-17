import ABuilder from '~/models/builder/ABuilder'
import BlogEntry from '~/models/entities/index/BlogEntry'

export default class BlogEntryBuilder extends ABuilder<BlogEntry> {
    constructor() {
        super(new BlogEntry())
    }

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
}
