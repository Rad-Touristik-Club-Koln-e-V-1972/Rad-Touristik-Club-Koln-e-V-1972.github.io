import ChildBuilder from '~/models/builder/navigation/ChildBuilder'
import Navigation from '~/models/entities/Navigation'
import Child from '~/models/entities/navigation/Child'

export default class NavigationBuilder extends ChildBuilder {
    protected readonly value = new Navigation()

    children(...value: Child[]): NavigationBuilder {
        this.value.children = value

        return this
    }

    color(value: string): NavigationBuilder {
        super.color(value)

        return this
    }

    icon(value: string): NavigationBuilder {
        super.icon(value)

        return this
    }

    imageUrl(value: string): NavigationBuilder {
        super.imageUrl(value)

        return this
    }

    title(value: string): NavigationBuilder {
        super.title(value)

        return this
    }

    to(name: string): NavigationBuilder {
        super.to(name)

        return this
    }

    url(value: string): NavigationBuilder {
        super.url(value)

        return this
    }

    build(): Navigation {
        return this.value
    }
}
