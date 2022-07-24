import Entry from '~/models/entities/gallery/Entry'

const createPreviewURL = (value: string) => {
    const strings = value.split('/')
    return `${strings.slice(0, -1).join('/')}/preview/preview.${strings.at(-1)}`
}

export default class EntryBuilder {
    private readonly value: Entry

    constructor() {
        this.value = new Entry()
    }

    previewUrl(value?: string): EntryBuilder {
        // eslint-disable-next-line no-console
        if (!value && !this.value.srcUrl) console.error('EntryBuilder.previewUrl: srcUrl is not set')

        this.value.previewUrl = value || createPreviewURL(this.value.srcUrl)

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
