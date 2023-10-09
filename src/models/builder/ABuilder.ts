import AEntity from 'src/models/entities/AEntity'

export default abstract class ABuilder {
    private aEntity = new AEntity()

    setId = (value: string): this => {
        this.aEntity.id = value

        return this
    }

    buildAEntity() {
        return this.aEntity
    }
}
