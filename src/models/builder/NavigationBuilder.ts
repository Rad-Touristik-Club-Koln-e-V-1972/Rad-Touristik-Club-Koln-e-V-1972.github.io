import Navigation from 'src/models/entities/Navigation'
import ABuilder from 'src/models/builder/ABuilder'

export default class NavigationBuilder extends ABuilder {
    protected entity = new Navigation()

    build = () => Object.assign(this.entity, super.build())

    setChildren = (...value: Navigation[]): this => {
        this.entity.children = value

        return this
    }

    setColor = (value: string): this => {
        this.entity.color = value

        return this
    }

    setIcon = (value: string): this => {
        this.entity.icon = value

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }

    setTo = (name: string): this => {
        this.entity.to = { name }

        return this
    }

    setUrl = (value: string): this => {
        this.entity.target = '_blank'
        this.entity.url = new URL(`https://${value}`)

        return this
    }
}
