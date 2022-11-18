import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Popup from '~/models/entities/Popup'

export default class PopupBuilder extends ABuilder<Popup> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private text!: string
    private title!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                text: this.text,
                title: this.title,
            },
            new AEntity(this.id)
        ) as Popup
    }

    setText(value: string): PopupBuilder {
        this.text = value

        return this
    }

    setTitle(value: string): PopupBuilder {
        this.title = value

        return this
    }
}
