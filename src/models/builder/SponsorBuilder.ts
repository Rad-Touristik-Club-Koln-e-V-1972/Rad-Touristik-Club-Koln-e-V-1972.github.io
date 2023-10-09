import ABuilder from 'src/models/builder/ABuilder'
import Sponsor from 'src/models/entities/Sponsor'

export default class SponsorBuilder extends ABuilder {
    private sponsor = new Sponsor()

    buildSponsor = () => Object.assign(this.sponsor, this.buildAEntity())

    setImageUrl = (value: string): this => {
        this.sponsor.imageUrl = new URL(`https://${value}`)

        return this
    }

    setText = (value: string): this => {
        this.sponsor.text = value.replaceAll('\n', '<br>')

        return this
    }

    setUrl = (value: string): this => {
        this.sponsor.url = new URL(`https://${value}`)

        return this
    }
}
