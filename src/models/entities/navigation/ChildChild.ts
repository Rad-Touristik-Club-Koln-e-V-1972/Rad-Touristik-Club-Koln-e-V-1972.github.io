import { v4 as uuid } from 'uuid'

export default class ChildChild {
    color?: string
    icon?: string
    id = uuid()
    nuxt = false
    target?: string
    title?: string
    to?: object
    url?: string
}
