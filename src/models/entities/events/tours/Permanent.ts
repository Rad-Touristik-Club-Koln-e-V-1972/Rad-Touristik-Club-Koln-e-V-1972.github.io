import Tour from 'src/models/entities/events/tours/Tour'
import EProfile from 'src/models/enums/events/EProfile'

export default class Permanent extends Tour {
  height!: number
  length!: number
  profile = EProfile.Wellig
}
