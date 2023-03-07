import ABuilder from '~/models/builder/ABuilder'
import Suggestion from '~/models/entities/events/tours/events/Suggestion'

export default class SuggestionBuilder extends ABuilder {
    private entity = new Suggestion()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setText(value: string): SuggestionBuilder {
        this.entity.text = value

        return this
    }

    setTitle(value: string): SuggestionBuilder {
        this.entity.title = value

        return this
    }

    setUrl(value: string): SuggestionBuilder {
        this.entity.url = new URL(`https://${value}`)

        return this
    }
}
