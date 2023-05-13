import ABuilder from '~/models/builder/ABuilder'
import MembershipFee from '~/models/entities/membership-registration/MembershipFee'
import Signature from '~/models/entities/membership-registration/Signature'

export default class MembershipFeeBuilder extends ABuilder {
    private entity = new MembershipFee()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setBankholder(value: string): MembershipFeeBuilder {
        this.entity.bankholder = value

        return this
    }

    setBic(value: string): MembershipFeeBuilder {
        this.entity.bic = value

        return this
    }

    setCreditInstitute(value: string): MembershipFeeBuilder {
        this.entity.creditInstitute = value

        return this
    }

    setIban(value: string): MembershipFeeBuilder {
        this.entity.iban = value

        return this
    }

    setPaymentMethod(value: boolean): MembershipFeeBuilder {
        this.entity.paymentMethod = value

        return this
    }

    setSignature(value: Signature): MembershipFeeBuilder {
        this.entity.signature = value

        return this
    }
}
