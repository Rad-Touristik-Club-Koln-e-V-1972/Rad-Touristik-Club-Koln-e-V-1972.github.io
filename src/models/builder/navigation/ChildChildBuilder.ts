import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildChildBuilder {
    protected readonly value = new ChildChild()

    color(value: string): ChildChildBuilder {
        this.value.color = value

        return this
    }

    icon(value: string): ChildChildBuilder {
        this.value.icon = value

        return this
    }

    imageUrl(value: string): ChildChildBuilder {
        this.value.imageUrl = value

        return this
    }

    title(value: string): ChildChildBuilder {
        this.value.title = value

        return this
    }

    to(name: string): ChildChildBuilder {
        this.value.to = { name }
        this.value.nuxt = true

        return this
    }

    url(value: string): ChildChildBuilder {
        this.value.url = value
        this.value.target = '_blank'

        return this
    }

    build(): ChildChild {
        return this.value
    }
}
