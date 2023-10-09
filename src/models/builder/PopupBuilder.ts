import ABuilder from 'src/models/builder/ABuilder'
import Popup from 'src/models/entities/Popup'

export default class PopupBuilder extends ABuilder {
    private popup = new Popup()

    buildPopup = () => Object.assign(this.popup, this.buildAEntity())

    setText = (value: string): this => {
        this.popup.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.popup.title = value

        return this
    }
}
