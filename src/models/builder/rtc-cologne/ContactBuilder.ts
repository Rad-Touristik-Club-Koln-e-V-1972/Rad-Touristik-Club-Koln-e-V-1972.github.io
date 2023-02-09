import ABuilder from '~/models/builder/ABuilder'
import Contact from '~/models/entities/rtc-cologne/Contact'

export default class ContactBuilder extends ABuilder {
    private entity = new Contact()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setEMail(value: string): ContactBuilder {
        this.entity.eMail = value

        return this
    }

    setImageUrl(value: string): ContactBuilder {
        this.entity.imageUrl = new URL(`https://${value}`)

        return this
    }

    setName(value: string): ContactBuilder {
        this.entity.name = value

        return this
    }

    setPosition(value: string): ContactBuilder {
        this.entity.position = value

        return this
    }
}
