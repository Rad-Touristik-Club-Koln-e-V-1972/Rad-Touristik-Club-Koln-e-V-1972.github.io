import ABuilder from '~/models/builder/ABuilder'
import Contact from '~/models/entities/rtc-cologne/Contact'

export default class ContactBuilder extends ABuilder<Contact> {
    private eMail!: string
    private imageUrl!: string
    private name!: string
    private position!: string

    build() {
        return {
            eMail: this.eMail,
            id: this.id,
            imageUrl: new URL(`https://${this.imageUrl}`),
            name: this.name,
            position: this.position,
        } satisfies Contact
    }

    setEMail(value: string): ContactBuilder {
        this.eMail = value

        return this
    }

    setImageUrl(value: string): ContactBuilder {
        this.imageUrl = value

        return this
    }

    setName(value: string): ContactBuilder {
        this.name = value

        return this
    }

    setPosition(value: string): ContactBuilder {
        this.position = value

        return this
    }
}
