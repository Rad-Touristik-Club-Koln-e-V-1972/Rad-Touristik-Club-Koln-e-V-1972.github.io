import AEntity from '~/models/entities/AEntity'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class Track extends AEntity {
    controls = 0
    end = new Date()
    height = 0
    important = false
    length = 0
    name = ''
    profile = EProfile.normal
    start = new Date()
    text = ''
    urls: Record<string, URL> = {}
}
