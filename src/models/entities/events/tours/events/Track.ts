import AEntity from '~/models/entities/AEntity'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class Track extends AEntity {
    controls!: number
    end!: Date
    height!: number
    important = false
    length!: number
    name!: string
    profile = EProfile.normal
    start!: Date
    text!: string
    urls: Record<string, URL> = {}
}
