import AEntity from 'src/models/entities/AEntity'

export default class Navigation extends AEntity {
    children: Navigation[] = []
    color: string | undefined
    icon: string | undefined
    target = ''
    title?: string
    to: object | undefined
    url?: URL
}
