import Entry from '@/models/entities/gallery/Entry'

export default class EntryBuilder {
    private readonly value: Entry

    constructor() {
        this.value = new Entry()
    }

    previewUrl(value: string): EntryBuilder {
        this.value.previewUrl = value
        return this
    }

    srcUrl(value: string): EntryBuilder {
        this.value.srcUrl = value
        return this
    }

    build(): Entry {
        return this.value
    }
}
