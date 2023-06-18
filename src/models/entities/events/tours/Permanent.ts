import Tour from 'src/models/entities/events/Tour'
import EProfile from 'src/models/enums/events/tours/EProfile'

export default class Permanent extends Tour {
    height!: number
    length!: number
    profile = EProfile.Wellig
}
