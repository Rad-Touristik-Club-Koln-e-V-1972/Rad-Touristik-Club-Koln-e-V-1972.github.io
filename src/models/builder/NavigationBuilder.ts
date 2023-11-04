import Navigation from 'src/models/entities/navigation/Navigation'
import ABuilder from 'src/models/builder/ABuilder'

export default class NavigationBuilder extends ABuilder {
    private navigation = new Navigation()

    buildNavigation = () => Object.assign(this.navigation, this.buildAEntity())

    setChildren = (...value: Navigation[]): this => {
        this.navigation.children = value

        return this
    }

    setColor = (value: string): this => {
        this.navigation.color = value

        return this
    }

    setIcon = (value: string): this => {
        this.navigation.icon = value

        return this
    }

    setTitle = (value: string): this => {
        this.navigation.title = value

        return this
    }

    setTo = (name: string): this => {
        this.navigation.to = { name }

        return this
    }

    setUrl = (value: string): this => {
        this.navigation.target = '_blank'
        this.navigation.url = new URL(`https://${value}`)

        return this
    }
}
