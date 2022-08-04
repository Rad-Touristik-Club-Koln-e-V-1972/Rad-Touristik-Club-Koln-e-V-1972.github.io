import { v4 as uuid } from 'uuid'

export default class Sponsor {
    id = uuid()
    imageSrc?: string
    text?: string
    url?: string
}
