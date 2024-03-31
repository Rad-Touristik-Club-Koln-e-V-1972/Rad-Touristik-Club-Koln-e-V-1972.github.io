import ABuilder from 'src/models/builder/ABuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import Training from 'src/models/entities/events/Training'

export default class TrainingBuilder extends ABuilder {
  private training = new Training()

  buildTraining = () => Object.assign(this.training, this.buildAEntity())

  setAlternativeDay = (value: string): this => {
    this.training.alternativeDay = value

    return this
  }

  setDay = (value: string): this => {
    this.training.day = value

    return this
  }

  setDeparture = (value: string): this => {
    this.training.departure = value

    return this
  }

  setImageUrls = (value: Record<string, string>): this => {
    for (const id of Object.keys(value)) {
      this.training.imageUrls.push(new GalleryEntryBuilder().setId(id).setImageUrl(value[id]).buildGalleryEntry())
    }

    return this
  }

  setLength = (value: string): this => {
    this.training.length = value

    return this
  }

  setLocation = (value: string): this => {
    this.training.location = value

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
