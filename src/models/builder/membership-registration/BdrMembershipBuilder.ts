import ABuilder from 'src/models/builder/ABuilder'
import BdrMembership from 'src/models/entities/membership-registration/BdrMembership'

export default class BdrMembershipBuilder extends ABuilder {
    private entity = new BdrMembership()

    build = () => Object.assign(this.entity, super.build())

    setIsMember = (value: boolean): this => {
        this.entity.isMember = value

        return this
    }

    setDate = (value: string): this => {
        this.entity.date = value

        return this
    }

    setNumber = (value: string): this => {
        this.entity.number = value

        return this
    }
}
