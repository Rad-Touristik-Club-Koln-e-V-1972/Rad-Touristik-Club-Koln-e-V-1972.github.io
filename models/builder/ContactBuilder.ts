import Contact from '@/models/entities/Contact'

export default class ContactBuilder {
    private readonly value: Contact

    constructor() {
        this.value = new Contact()
    }

    description(value: string): ContactBuilder {
        this.value.description = value
        return this
    }

    eMail(value: string): ContactBuilder {
        this.value.eMail = value
        return this
    }

    imageSrc(value: string): ContactBuilder {
        this.value.imageSrc = value
        return this
    }

    name(value: string): ContactBuilder {
        this.value.name = value
        return this
    }

    position(value: string): ContactBuilder {
        this.value.position = value
        return this
    }

    build(): Contact {
        return this.value
    }
}
