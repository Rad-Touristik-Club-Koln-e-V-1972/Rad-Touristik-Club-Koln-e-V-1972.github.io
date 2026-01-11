import Tour from 'src/models/entities/events/tours/Tour'
import EEvent from 'src/models/enums/EEvent'
import EProfile from 'src/models/enums/events/EProfile'

export default class Permanent extends Tour {
  override category = EEvent.Permanente
  height!: number
  length!: number
  profile = EProfile.Wellig
}
