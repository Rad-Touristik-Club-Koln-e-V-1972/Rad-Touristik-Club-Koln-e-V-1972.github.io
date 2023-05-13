import ABuilder from '~/models/builder/ABuilder'
import Signature from '~/models/entities/membership-registration/Signature'

export default class SignatureBuilder extends ABuilder {
    private entity = new Signature()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setDate(value: string): SignatureBuilder {
        this.entity.date = value

        return this
    }

    setLocation(value: string): SignatureBuilder {
        this.entity.location = value

        return this
    }

    setSignature(value: string): SignatureBuilder {
        this.entity.signature = value

        return this
    }
}
