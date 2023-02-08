import AEntity from '~/models/entities/AEntity'

export default class ChildChild extends AEntity {
    color: string | null = null
    icon: string | null = null
    imageUrl: URL | null = null
    nuxt = false
    target: string | null = null
    title: string | null = null
    to: object | null = null
    url: URL | null = null
}
