import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildChildBuilder<T extends ChildChild> extends ABuilder<T> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    protected color?: string
    protected icon?: string
    protected imageUrl?: string
    protected nuxt = false
    protected target?: string
    protected title?: string
    protected to?: object
    protected url?: URL

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                color: this.color,
                icon: this.icon,
                imageUrl: new URL(`https://${this.imageUrl}`),
                nuxt: this.nuxt,
                target: this.target,
                title: this.title,
                to: this.to,
                url: this.url,
            },
            new AEntity(this.id)
        ) as T
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
