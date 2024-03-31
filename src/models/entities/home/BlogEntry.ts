import AEntity from 'src/models/entities/AEntity'

export default class BlogEntry extends AEntity {
  albumIDs: Record<string, string> = {}
  end?: Date
  start!: Date
  text!: string
  title!: string
}
