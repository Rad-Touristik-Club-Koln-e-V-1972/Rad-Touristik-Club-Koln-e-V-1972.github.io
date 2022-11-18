import AEntity from '~/models/entities/AEntity'

export default abstract class ABuilder<T extends AEntity> {
    protected id!: string

    setId(value: string): this {
        this.id = value

        return this
    }

    abstract build(): T
}
