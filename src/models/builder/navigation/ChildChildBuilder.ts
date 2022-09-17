import ABuilder from '~/models/builder/ABuilder'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildChildBuilder<T extends ChildChild> extends ABuilder<T> {
    constructor(value: T = new ChildChild() as T) {
        super(value)
    }

    color(value: string): ChildChildBuilder<T> {
        this.value.color = value

        return this
    }

    icon(value: string): ChildChildBuilder<T> {
        this.value.icon = value

        return this
    }

    imageUrl(value: string): ChildChildBuilder<T> {
        this.value.imageUrl = new URL(`https://${value}`)

        return this
    }

    title(value: string): ChildChildBuilder<T> {
        this.value.title = value

        return this
    }

    // noinspection FunctionNamingConventionJS
    to(name: string): ChildChildBuilder<T> {
        this.value.to = { name }
        this.value.nuxt = true

        return this
    }

    url(value: string): ChildChildBuilder<T> {
        this.value.url = new URL(`https://${value}`)
        this.value.target = '_blank'

        return this
    }
}
