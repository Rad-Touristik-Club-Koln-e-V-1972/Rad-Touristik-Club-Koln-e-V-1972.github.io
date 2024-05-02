import ABuilder from 'src/models/builder/ABuilder'
import MembershipSignature from 'src/models/entities/membership-registration/MembershipSignature'

export default class SignatureBuilder extends ABuilder {
  private signature = new MembershipSignature()

  buildSignature = () => Object.assign(this.signature, this.buildAEntity())

  setDate = (value: string): this => {
    this.signature.date = value

    return this
  }

  setLocation = (value: string): this => {
    this.signature.location = value

    return this
  }

  setSignature = (value: string): this => {
    this.signature.signature = value

    return this
  }
}
