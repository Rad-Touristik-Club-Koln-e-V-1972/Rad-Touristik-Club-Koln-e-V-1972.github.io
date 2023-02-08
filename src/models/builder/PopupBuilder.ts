import ABuilder from '~/models/builder/ABuilder'
import Popup from '~/models/entities/Popup'

export default class PopupBuilder extends ABuilder<Popup> {
    private entity = new Popup()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setText(value: string): PopupBuilder {
        this.entity.text = value

        return this
    }

    setTitle(value: string): PopupBuilder {
        this.entity.title = value

        return this
    }
}
