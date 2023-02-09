import AEntity from '~/models/entities/AEntity'

export default abstract class ABuilder {
    protected aEntity = new AEntity()

    setId(value: string): this {
        this.aEntity.id = value

        return this
    }

    build() {
        return this.aEntity
    }
}
