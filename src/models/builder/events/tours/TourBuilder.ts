import ABuilder from 'src/models/builder/ABuilder'
import type Donation from 'src/models/entities/Donation'
import type Control from 'src/models/entities/events/tours/Control'
import Tour from 'src/models/entities/events/tours/Tour'
import type EEvent from 'src/models/enums/EEvent'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

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

  setDonations = (...value: Donation[]): this => {
    this.tour.donations = value

    return this
  }

  setImageUrls = (value: Record<string, string>): this => {
    for (const [key, data] of Object.entries(value)) this.tour.images.push(new GalleryEntryBuilder().setId(key).setImageUrl(data).buildGalleryEntry())

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
