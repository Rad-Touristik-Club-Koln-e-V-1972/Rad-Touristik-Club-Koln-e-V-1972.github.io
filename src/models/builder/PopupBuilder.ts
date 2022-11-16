import ABuilder from '~/models/builder/ABuilder'
import Popup from '~/models/entities/Popup'

export default class PopupBuilder extends ABuilder<Popup> {
    constructor() {
        super(new Popup())
    }

    text(value: string): PopupBuilder {
        this.value.text = value

        return this
    }

    title(value: string): PopupBuilder {
        this.value.title = value

        return this
    }
}
