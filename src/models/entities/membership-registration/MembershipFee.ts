import AEntity from '~/models/entities/AEntity'
import Signature from '~/models/entities/membership-registration/Signature'

export default class MembershipFee extends AEntity {
    bankholder!: string
    bic!: string
    creditInstitute!: string
    iban!: string
    paymentMethod!: boolean
    signature: Signature = new Signature()
}
