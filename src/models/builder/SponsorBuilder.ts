import ABuilder from '~/models/builder/ABuilder'
import Sponsor from '~/models/entities/Sponsor'

export default class SponsorBuilder extends ABuilder<Sponsor> {
    private entity = new Sponsor()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setImageUrl(value: string): SponsorBuilder {
        this.entity.imageUrl = new URL(`https://${value}`)

        return this
    }

    setText(value: string): SponsorBuilder {
        this.entity.text = value

        return this
    }

    setUrl(value: string): SponsorBuilder {
        this.entity.url = new URL(`https://${value}`)

        return this
    }
}
