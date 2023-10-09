import ABuilder from 'src/models/builder/ABuilder'
import Contact from 'src/models/entities/rtc-cologne/Contact'

export default class ContactBuilder extends ABuilder {
    private contact = new Contact()

    buildContact = () => Object.assign(this.contact, this.buildAEntity())

    setEMail = (value: string): this => {
        this.contact.eMail = value

        return this
    }

    setImageUrl = (value: string): this => {
        this.contact.imageUrl = new URL(`https://${value}`)

        return this
    }

    setName = (value: string): this => {
        this.contact.name = value

        return this
    }

    setPosition = (value: string): this => {
        this.contact.position = value

        return this
    }
}
