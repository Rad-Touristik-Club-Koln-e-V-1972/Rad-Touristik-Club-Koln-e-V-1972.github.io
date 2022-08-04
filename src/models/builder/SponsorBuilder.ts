import Sponsor from '~/models/entities/Sponsor'

export default class SponsorBuilder {
    protected readonly value = new Sponsor()

    imageSrc(value: string): SponsorBuilder {
        this.value.imageSrc = value

        return this
    }

    text(value: string): SponsorBuilder {
        this.value.text = value

        return this
    }

    url(value: string): SponsorBuilder {
        this.value.url = value

        return this
    }

    build(): Sponsor {
        return this.value
    }
}
