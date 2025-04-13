import AEntity from 'src/models/entities/AEntity'
import EProfile from 'src/models/enums/events/EProfile'

export default class Track extends AEntity {
  controls!: number
  end!: Date
  height!: number
  important = false
  length!: number
  name!: string
  profile = EProfile.Normal
  start!: Date
  subname?: string
  text!: string
  urls: Record<string, URL> = {}
}
