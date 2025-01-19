import ABuilder from 'src/models/builder/ABuilder'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import type Signature from 'src/models/entities/membership-registration/Signature'

export default class MembershipFeeBuilder extends ABuilder {
  private membershipFee = new MembershipFee()

  buildMembershipFee = () => Object.assign(this.membershipFee, this.buildAEntity())

  setBankholder = (value: string): this => {
    this.membershipFee.bankholder = value

    return this
  }

  setBic = (value: string): this => {
    this.membershipFee.bic = value

    return this
  }

  setCreditInstitute = (value: string): this => {
    this.membershipFee.creditInstitute = value

    return this
  }

  setIban = (value: string): this => {
    this.membershipFee.iban = value

    return this
  }

  setPaymentMethod = (value: string): this => {
    this.membershipFee.paymentMethod = value

    return this
  }

  setSignature = (value: Signature): this => {
    this.membershipFee.signature = value

    return this
  }
}
