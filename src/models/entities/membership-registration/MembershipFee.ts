import AEntity from '~/models/entities/AEntity'
import Signature from '~/models/entities/membership-registration/Signature'

export default class MembershipFee extends AEntity {
    bankholder = ''
    bic = ''
    creditInstitute = ''
    iban = ''
    paymentMethod = false
    signature: Signature = new Signature()
}
