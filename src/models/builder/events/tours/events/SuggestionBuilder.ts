import ABuilder from 'src/models/builder/ABuilder'
import Suggestion from 'src/models/entities/events/tours/events/Suggestion'

export default class SuggestionBuilder extends ABuilder {
    private suggestion = new Suggestion()

    buildSuggestion = () => Object.assign(this.suggestion, this.buildAEntity())

    setText = (value: string): this => {
        this.suggestion.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.suggestion.title = value

        return this
    }

    setUrl = (value: string): this => {
        this.suggestion.url = new URL(`https://${value}`)

        return this
    }
}
