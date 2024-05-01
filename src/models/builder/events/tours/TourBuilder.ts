import ABuilder from 'src/models/builder/ABuilder'
import PopupBuilder from 'src/models/builder/PopupBuilder'
import Control from 'src/models/entities/events/tours/Control'
import Tour from 'src/models/entities/events/tours/Tour'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from 'src/models/enums/EEvent'

export default class TourBuilder extends ABuilder {
  private tour = new Tour()

  buildTour = () => Object.assign(this.tour, this.buildAEntity())

  setActive = (value: boolean): this => {
    this.tour.active = value

    return this
  }

  setCategory = (value: EEvent): this => {
    this.tour.category = value

    return this
  }

  setControls = (...value: Control[]): this => {
    this.tour.controls = value

    return this
  }

  setImages = (...value: GalleryEntry[]): this => {
    this.tour.images = value

    return this
  }

  setLastChange = (value: string): this => {
    this.tour.lastChange = new Date(value)

    return this
  }

  setLocation = (value: Control): this => {
    this.tour.location = value

    return this
  }

  setPopup = (text: string, title: string): this => {
    this.tour.popup = new PopupBuilder().setId('04ad6a7c-7fff-4224-bdb6-b52fb64f1785').setText(text).setTitle(title).buildPopup()

    return this
  }

  setText = (value: string): this => {
    this.tour.text = value.replaceAll('\n', '<br>')

    return this
  }

  setTitle = (value: string): this => {
    this.tour.title = value

    return this
  }

  setUrls = (value: Record<string, URL>): this => {
    this.tour.urls = value

    return this
  }
}
