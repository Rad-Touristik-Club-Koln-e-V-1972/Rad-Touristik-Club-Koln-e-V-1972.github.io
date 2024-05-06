import ABuilder from 'src/models/builder/ABuilder'
import Track from 'src/models/entities/events/tours/events/Track'
import EProfile from 'src/models/enums/events/EProfile'

export default class TrackBuilder extends ABuilder {
  private track = new Track()

  buildTrack = () => Object.assign(this.track, this.buildAEntity())

  setControls = (value: number): this => {
    this.track.controls = value

    return this
  }

  setHeight = (value: number): this => {
    this.track.height = value

    return this
  }

  setImportant = (value: boolean): this => {
    this.track.important = value

    return this
  }

  setLength = (value: number): this => {
    this.track.length = value

    return this
  }

  setName = (value: string): this => {
    this.track.name = value

    return this
  }

  setProfile = (value: EProfile): this => {
    this.track.profile = value

    return this
  }

  setText = (value: string): this => {
    this.track.text = value.replaceAll('\n', '<br>')

    return this
  }

  setTime = (start: string, end?: string): this => {
    if (end) this.track.end = new Date(`1970-01-01 ${end}`)
    this.track.start = new Date(`1970-01-01 ${start}`)

    return this
  }

  setUrls = (value: Record<string, URL>): this => {
    this.track.urls = value

    return this
  }
}
