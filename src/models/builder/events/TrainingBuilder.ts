import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import Training from 'src/models/entities/events/Training'
import ETraining from 'src/models/enums/events/ETraining'

export default class TrainingBuilder extends ABuilder {
    private training = new Training()

    buildTraining = () => Object.assign(this.training, this.buildAEntity())

    setCategory = (value: ETraining): this => {
        this.training.category = value

        return this
    }

    setHeight = (value: string): this => {
        this.training.height = value

        return this
    }

    setImageUrls = (value: Record<string, string>): this => {
        for (const id of Object.keys(value)) {
            this.training.imageUrls.push(new GalleryEntryBuilder().setId(id).setImageUrl(value[id]).buildGalleryEntry())
        }

        return this
    }

    setLastChange = (value: string): this => {
        this.training.lastChange = new Date(value)

        return this
    }

    setLength = (value: string): this => {
        this.training.length = value

        return this
    }

    setSpeed = (value: string): this => {
        this.training.speed = value

        return this
    }

    setText = (value: string): this => {
        this.training.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.training.title = value

        return this
    }
}
