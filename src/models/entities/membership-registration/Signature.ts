import AEntity from '~/models/entities/AEntity'

export default class Signature extends AEntity {
    date: string = new Date().toISOString().substring(0, 10)
    location = ''
    signature = ''
}
