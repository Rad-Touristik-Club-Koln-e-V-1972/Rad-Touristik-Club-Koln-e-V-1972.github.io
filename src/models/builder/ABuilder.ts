import AEntity from '~/models/entities/AEntity'

export default abstract class ABuilder<T extends AEntity> {
    protected aEntity = new AEntity()

    setId(value: string): this {
        this.aEntity.id = value

        return this
    }

    abstract build(): T
}
