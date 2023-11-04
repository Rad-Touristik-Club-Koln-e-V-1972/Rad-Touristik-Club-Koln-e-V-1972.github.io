import { date } from 'quasar'
import AEntity from 'src/models/entities/AEntity'

export default class BdrMembership extends AEntity {
    isMember = false
    date = date.formatDate(new Date(), 'YYYY/MM/DD')
    number = ''
}
