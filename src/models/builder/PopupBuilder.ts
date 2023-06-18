import ABuilder from 'src/models/builder/ABuilder'
import Popup from 'src/models/entities/Popup'

export default class PopupBuilder extends ABuilder {
    private entity = new Popup()

    build = () => Object.assign(this.entity, super.build())

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }
}
