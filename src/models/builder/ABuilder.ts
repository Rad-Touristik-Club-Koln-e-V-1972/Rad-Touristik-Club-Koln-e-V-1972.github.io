import AEntity from '~/models/entities/AEntity'

export default abstract class ABuilder<T extends AEntity> {
    protected readonly value: T

    protected constructor(value: T) {
        this.value = value
    }

    // noinspection FunctionNamingConventionJS
    id(value: string): this {
        this.value.id = value

        return this
    }

    build(): T {
        return this.value
    }
}
