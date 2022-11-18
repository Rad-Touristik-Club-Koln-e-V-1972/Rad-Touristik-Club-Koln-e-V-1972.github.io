import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Sponsor from '~/models/entities/Sponsor'

export default class SponsorBuilder extends ABuilder<Sponsor> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private imageUrl?: string
    private text?: string
    private url?: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                imageUrl: new URL(`https://${this.imageUrl}`),
                text: this.text,
                url: new URL(`https://${this.url}`),
            },
            new AEntity(this.id)
        ) as Sponsor
    }

    setImageUrl(value: string): SponsorBuilder {
        this.imageUrl = value

        return this
    }

    setText(value: string): SponsorBuilder {
        this.text = value

        return this
    }

    setUrl(value: string): SponsorBuilder {
        this.url = value

        return this
    }
}
