import ABuilder from 'src/models/builder/ABuilder'
import Suggestion from 'src/models/entities/events/tours/events/Suggestion'

export default class SuggestionBuilder extends ABuilder {
    private entity = new Suggestion()

    build = () => Object.assign(this.entity, super.build())

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }

    setUrl = (value: string): this => {
        this.entity.url = new URL(`https://${value}`)

        return this
    }
}
