import AEntity from '~/models/entities/AEntity'
import ETraining from '~/models/enums/events/ETraining'

export default class Training extends AEntity {
    category = ETraining.wintertraining
    height!: string
    lastChange!: Date
    length!: string
    speed!: string
    text!: string
    title!: string
}
