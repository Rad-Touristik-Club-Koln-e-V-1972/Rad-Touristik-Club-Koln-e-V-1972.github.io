import AEntity from 'src/models/entities/AEntity'

export default class Time extends AEntity {
    end: Date | null = null
    name!: string
    start!: Date
}
