import ABuilder from '~/models/builder/ABuilder'
import Sponsor from '~/models/entities/Sponsor'

export default class SponsorBuilder extends ABuilder<Sponsor> {
    private imageUrl?: URL
    private text?: string
    private url?: URL

    build() {
        return {
            id: this.id,
            imageUrl: this.imageUrl,
            text: this.text,
            url: this.url,
        } satisfies Sponsor
    }

    setImageUrl(value: string): SponsorBuilder {
        this.imageUrl = new URL(`https://${value}`)

        return this
    }

    setText(value: string): SponsorBuilder {
        this.text = value

        return this
    }

    setUrl(value: string): SponsorBuilder {
        this.url = new URL(`https://${value}`)

        return this
    }
}
