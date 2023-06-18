import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import Training from 'src/models/entities/events/Training'
import ETraining from 'src/models/enums/events/ETraining'

export default class TrainingBuilder extends ABuilder {
    private entity = new Training()

    build = () => Object.assign(this.entity, super.build())

    setCategory = (value: ETraining): this => {
        this.entity.category = value

        return this
    }

    setHeight = (value: string): this => {
        this.entity.height = value

        return this
    }

    setImageUrls = (value: Record<string, string>): this => {
        for (const id of Object.keys(value)) {
            this.entity.imageUrls.push(new GalleryEntryBuilder().setId(id).setImageUrl(value[id]).build())
        }

        return this
    }

    setLastChange = (value: string): this => {
        this.entity.lastChange = new Date(value)

        return this
    }

    setLength = (value: string): this => {
        this.entity.length = value

        return this
    }

    setSpeed = (value: string): this => {
        this.entity.speed = value

        return this
    }

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }
}
