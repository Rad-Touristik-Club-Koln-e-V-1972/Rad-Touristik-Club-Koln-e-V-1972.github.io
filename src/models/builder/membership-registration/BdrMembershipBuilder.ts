import ABuilder from '~/models/builder/ABuilder'
import BdrMembership from '~/models/entities/membership-registration/BdrMembership'

export default class BdrMembershipBuilder extends ABuilder {
    private entity = new BdrMembership()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setIsMember(value: boolean): BdrMembershipBuilder {
        this.entity.isMember = value

        return this
    }

    setDate(value: string): BdrMembershipBuilder {
        this.entity.date = value

        return this
    }

    setNumber(value: string): BdrMembershipBuilder {
        this.entity.number = value

        return this
    }
}
