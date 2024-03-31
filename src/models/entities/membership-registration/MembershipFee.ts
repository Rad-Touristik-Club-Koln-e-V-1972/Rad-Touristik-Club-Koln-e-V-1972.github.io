import AEntity from 'src/models/entities/AEntity'
import Signature from 'src/models/entities/membership-registration/Signature'

export default class MembershipFee extends AEntity {
  bankholder = ''
  bic = ''
  creditInstitute = ''
  iban = ''
  paymentMethod = 'Lastschrifteinzug'
  signature: Signature = new Signature()
}
