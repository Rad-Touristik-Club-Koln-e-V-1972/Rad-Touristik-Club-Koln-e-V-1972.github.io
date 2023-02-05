import ABuilder from '~/models/builder/ABuilder'
import Popup from '~/models/entities/Popup'

export default class PopupBuilder extends ABuilder<Popup> {
    private text!: string
    private title!: string

    build() {
        return {
            id: this.id,
            text: this.text,
            title: this.title,
        } satisfies Popup
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
