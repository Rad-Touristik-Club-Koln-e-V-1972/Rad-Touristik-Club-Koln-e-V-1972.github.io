import Sponsor from '~/models/entities/Sponsor'

export default class SponsorBuilder {
    protected readonly value = new Sponsor()

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

    build(): Sponsor {
        return this.value
    }
}
