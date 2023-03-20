import AEntity from '~/models/entities/AEntity'

export default class ChildChild extends AEntity {
    color: string | undefined
    icon: string | undefined
    imageUrl: URL | null = null
    nuxt = false
    target: string | null = null
    title: string | null = null
    to: object | undefined
    url: URL | null = null
}
