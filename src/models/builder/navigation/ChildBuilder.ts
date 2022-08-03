import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'
import Child from '~/models/entities/navigation/Child'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildBuilder extends ChildChildBuilder {
    protected readonly value = new Child()

    children(...value: ChildChild[]): ChildBuilder {
        this.value.children = value

        return this
    }

    color(value: string): ChildBuilder {
        super.color(value)

        return this
    }

    icon(value: string): ChildBuilder {
        super.icon(value)

        return this
    }

    title(value: string): ChildBuilder {
        super.title(value)

        return this
    }

    to(name: string): ChildBuilder {
        super.to(name)

        return this
    }

    url(value: string): ChildBuilder {
        super.url(value)

        return this
    }

    build(): Child {
        return this.value
    }
}
