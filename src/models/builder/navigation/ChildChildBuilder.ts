import ABuilder from '~/models/builder/ABuilder'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildChildBuilder<T extends ChildChild> extends ABuilder {
    protected childChild = new ChildChild()

    build() {
        return Object.assign(this.childChild, super.build())
    }

    setColor(value: string): ChildChildBuilder<T> {
        this.childChild.color = value

        return this
    }

    setIcon(value: string): ChildChildBuilder<T> {
        this.childChild.icon = value

        return this
    }

    setImageUrl(value: string): ChildChildBuilder<T> {
        this.childChild.imageUrl = new URL(`https://${value}`)

        return this
    }

    setTitle(value: string): ChildChildBuilder<T> {
        this.childChild.title = value

        return this
    }

    setTo(name: string): ChildChildBuilder<T> {
        this.childChild.nuxt = true
        this.childChild.to = { name }

        return this
    }

    setUrl(value: string): ChildChildBuilder<T> {
        this.childChild.target = '_blank'
        this.childChild.url = new URL(`https://${value}`)

        return this
    }
}
