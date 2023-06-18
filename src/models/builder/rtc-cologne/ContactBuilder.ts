import ABuilder from 'src/models/builder/ABuilder'
import Contact from 'src/models/entities/rtc-cologne/Contact'

export default class ContactBuilder extends ABuilder {
    private entity = new Contact()

    build = () => Object.assign(this.entity, super.build())

    setEMail = (value: string): this => {
        this.entity.eMail = value

        return this
    }

    setImageUrl = (value: string): this => {
        this.entity.imageUrl = new URL(`https://${value}`)

        return this
    }

    setName = (value: string): this => {
        this.entity.name = value

        return this
    }

    setPosition = (value: string): this => {
        this.entity.position = value

        return this
    }
}
