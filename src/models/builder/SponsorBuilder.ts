import ABuilder from 'src/models/builder/ABuilder'
import Sponsor from 'src/models/entities/Sponsor'

export default class SponsorBuilder extends ABuilder {
    private entity = new Sponsor()

    build = () => Object.assign(this.entity, super.build())

    setImageUrl = (value: string): this => {
        this.entity.imageUrl = new URL(`https://${value}`)

        return this
    }

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setUrl = (value: string): this => {
        this.entity.url = new URL(`https://${value}`)

        return this
    }
}
