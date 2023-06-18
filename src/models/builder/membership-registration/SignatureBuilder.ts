import ABuilder from 'src/models/builder/ABuilder'
import Signature from 'src/models/entities/membership-registration/Signature'

export default class SignatureBuilder extends ABuilder {
    private entity = new Signature()

    build = () => Object.assign(this.entity, super.build())

    setDate = (value: string): this => {
        this.entity.date = value

        return this
    }

    setLocation = (value: string): this => {
        this.entity.location = value

        return this
    }

    setSignature = (value: string): this => {
        this.entity.signature = value

        return this
    }
}
