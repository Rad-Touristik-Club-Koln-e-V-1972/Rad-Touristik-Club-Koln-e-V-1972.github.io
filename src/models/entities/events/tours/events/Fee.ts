import AEntity from '~/models/entities/AEntity'
import EEvent from '~/models/enums/EEvent'

export default class Fee extends AEntity {
    category = EEvent.RTF
    name = ''
    price = 0
}
