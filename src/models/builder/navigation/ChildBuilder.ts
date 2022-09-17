import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'
import Child from '~/models/entities/navigation/Child'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildBuilder<T extends Child> extends ChildChildBuilder<T> {
    constructor(value: T = new Child() as T) {
        super(value)
    }

    children(...value: ChildChild[]): ChildBuilder<T> {
        this.value.children = value

        return this
    }

    color(value: string): ChildBuilder<T> {
        super.color(value)

        return this
    }

    expanded(): ChildBuilder<T> {
        this.value.expanded = true

        return this
    }

    icon(value: string): ChildBuilder<T> {
        super.icon(value)

        return this
    }

    imageUrl(value: string): ChildBuilder<T> {
        super.imageUrl(value)

        return this
    }

    title(value: string): ChildBuilder<T> {
        super.title(value)

        return this
    }

    to(name: string): ChildBuilder<T> {
        super.to(name)

        return this
    }

    url(value: string): ChildBuilder<T> {
        super.url(value)

        return this
    }
}
