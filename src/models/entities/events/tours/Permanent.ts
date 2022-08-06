import Tour from '~/models/entities/events/Tour'
import EEvent from '~/models/enums/EEvent'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class Permanent extends Tour {
    category = EEvent.Permanente
    height = 0
    length = 0
    profile = EProfile.wellig
}
