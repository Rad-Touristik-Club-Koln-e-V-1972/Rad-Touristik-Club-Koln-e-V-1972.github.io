import ABuilder from 'src/models/builder/ABuilder'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import Signature from 'src/models/entities/membership-registration/Signature'

export default class MembershipFeeBuilder extends ABuilder {
    private entity = new MembershipFee()

    build = () => Object.assign(this.entity, super.build())

    setBankholder = (value: string): this => {
        this.entity.bankholder = value

        return this
    }

    setBic = (value: string): this => {
        this.entity.bic = value

        return this
    }

    setCreditInstitute = (value: string): this => {
        this.entity.creditInstitute = value

        return this
    }

    setIban = (value: string): this => {
        this.entity.iban = value

        return this
    }

    setPaymentMethod = (value: string): this => {
        this.entity.paymentMethod = value

        return this
    }

    setSignature = (value: Signature): this => {
        this.entity.signature = value

        return this
    }
}
