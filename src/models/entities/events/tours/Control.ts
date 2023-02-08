import AEntity from '~/models/entities/AEntity'

export default class Control extends AEntity {
    city!: string
    street!: string
    url: URL | null = null
    title!: string
    zipCode!: string
}
