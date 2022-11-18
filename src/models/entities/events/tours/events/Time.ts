import AEntity from '~/models/entities/AEntity'

export default class Time extends AEntity {
    end?: Date
    name!: string
    start!: Date
}
