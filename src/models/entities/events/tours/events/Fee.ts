import AEntity from 'src/models/entities/AEntity'
import EEvent from 'src/models/enums/EEvent'

// noinspection JSClassNamingConvention
export default class Fee extends AEntity {
    category = EEvent.RTF
    group = 0
    name!: string
    price?: number
}
