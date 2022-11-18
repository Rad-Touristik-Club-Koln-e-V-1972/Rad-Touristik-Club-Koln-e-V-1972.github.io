import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Contact from '~/models/entities/about-us/Contact'

export default class ContactBuilder extends ABuilder<Contact> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private eMail!: string
    private imageUrl!: string
    private name!: string
    private position!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                eMail: this.eMail,
                imageUrl: new URL(`https://${this.imageUrl}`),
                name: this.name,
                position: this.position,
            },
            new AEntity(this.id)
        ) as Contact
    }

    setEMail(value: string): ContactBuilder {
        this.eMail = value

        return this
    }

    setImageUrl(value: string): ContactBuilder {
        this.imageUrl = value

        return this
    }

    setName(value: string): ContactBuilder {
        this.name = value

        return this
    }

    setPosition(value: string): ContactBuilder {
        this.position = value

        return this
    }
}
