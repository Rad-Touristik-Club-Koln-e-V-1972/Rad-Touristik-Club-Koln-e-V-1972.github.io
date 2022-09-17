import ABuilder from '~/models/builder/ABuilder'
import Sponsor from '~/models/entities/Sponsor'

export default class SponsorBuilder extends ABuilder<Sponsor> {
    constructor() {
        super(new Sponsor())
    }

    imageUrl(value: string): SponsorBuilder {
        this.value.imageUrl = new URL(`https://${value}`)

        return this
    }

    text(value: string): SponsorBuilder {
        this.value.text = value

        return this
    }

    url(value: string): SponsorBuilder {
        this.value.url = new URL(`https://${value}`)

        return this
    }
}
