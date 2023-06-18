import AEntity from 'src/models/entities/AEntity'

export default class Suggestion extends AEntity {
    text!: string
    title!: string
    url!: URL
}
