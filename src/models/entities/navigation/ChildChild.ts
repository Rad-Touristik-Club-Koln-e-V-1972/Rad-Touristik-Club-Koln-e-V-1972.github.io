import AEntity from '~/models/entities/AEntity'

export default class ChildChild extends AEntity {
    public color?: string
    public icon?: string
    public imageUrl?: URL
    public nuxt = false
    public target?: string
    public title?: string
    public to?: object
    public url?: URL
}
