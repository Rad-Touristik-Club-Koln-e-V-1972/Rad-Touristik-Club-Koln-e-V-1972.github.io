import AEntity from '~/models/entities/AEntity'

export default class BdrMembership extends AEntity {
    isMember!: boolean
    date!: string
    number!: string
}
