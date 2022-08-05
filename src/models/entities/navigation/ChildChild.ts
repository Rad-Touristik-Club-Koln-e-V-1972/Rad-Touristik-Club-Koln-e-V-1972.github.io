import AEntity from '~/models/entities/AEntity'

export default class ChildChild extends AEntity {
    color?: string
    icon?: string
    imageUrl?: URL
    nuxt = false
    target?: string
    title?: string
    to?: object
    url?: URL
}
