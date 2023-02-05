import ABuilder from '~/models/builder/ABuilder'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildChildBuilder<T extends ChildChild> extends ABuilder<T> {
    protected color?: string
    protected icon?: string
    protected imageUrl?: string
    protected nuxt = false
    protected target?: string
    protected title?: string
    protected to?: object
    protected url?: URL

    build() {
        return {
            color: this.color,
            icon: this.icon,
            id: this.id,
            imageUrl: new URL(`https://${this.imageUrl}`),
            nuxt: this.nuxt,
            target: this.target,
            title: this.title,
            to: this.to,
            url: this.url,
        } satisfies ChildChild as T
    }

    setColor(value: string): ChildChildBuilder<T> {
        this.color = value

        return this
    }

    setIcon(value: string): ChildChildBuilder<T> {
        this.icon = value

        return this
    }

    setImageUrl(value: string): ChildChildBuilder<T> {
        this.imageUrl = value

        return this
    }

    setTitle(value: string): ChildChildBuilder<T> {
        this.title = value

        return this
    }

    setTo(name: string): ChildChildBuilder<T> {
        this.to = { name }
        this.nuxt = true

        return this
    }

    setUrl(value: string): ChildChildBuilder<T> {
        this.url = new URL(`https://${value}`)
        this.target = '_blank'

        return this
    }
}
