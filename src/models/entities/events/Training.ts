import AEntity from '~/models/entities/AEntity'
import ETraining from '~/models/enums/events/ETraining'

export default class Training extends AEntity {
    category = ETraining.wintertraining
    height = ''
    lastChange: Date = new Date()
    length = ''
    speed = ''
    text = ''
    title = ''
}
